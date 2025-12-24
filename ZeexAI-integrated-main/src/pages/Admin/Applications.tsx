import { useState, useEffect, useMemo } from 'react';
import { API_ENDPOINTS } from '../../config/api';
import { Search, Filter, X } from 'lucide-react';
import { roles } from '../../data/roles';
import '../../assets/styles/admin.css';

interface Application {
  id: number;
  full_name: string;
  email: string;
  mobile: string;
  position: string;
  experience: string;
  resume: string;
  created_at: string;
}

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPosition, setFilterPosition] = useState('');
  const [filterExperience, setFilterExperience] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name'>('newest');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.CHECK_DATA);
      const data = await response.json();

      if (data.success) {
        setApplications(data.data);
      } else {
        setError(data.message || 'Failed to fetch applications');
      }
    } catch (err) {
      setError('Network error. Make sure backend is running.');
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateString;
    }
  };

  const openResume = (resumePath: string) => {
    const fullUrl = `${API_ENDPOINTS.APPLICATIONS.replace('/api/applications/', '')}${resumePath}`;
    window.open(fullUrl, '_blank');
  };

  // Get all positions from careers page
  const allPositions = useMemo(() => {
    const careerPositions = roles.map(role => role.title);
    const appliedPositions = applications.map(app => app.position);
    // Combine and get unique positions, prioritizing career page positions
    const allUnique = [...new Set([...careerPositions, ...appliedPositions])];
    return allUnique.sort();
  }, [applications]);

  // Experience levels (matching backend format)
  const experienceLevels = [
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5+ years'
  ];

  // Filter and sort applications
  const filteredApplications = useMemo(() => {
    let filtered = [...applications];

    // Search filter (name, email, mobile number)
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        app =>
          app.full_name.toLowerCase().includes(query) ||
          app.email.toLowerCase().includes(query) ||
          app.mobile.includes(query)
      );
    }

    // Position filter
    if (filterPosition) {
      filtered = filtered.filter(app => app.position === filterPosition);
    }

    // Experience filter
    if (filterExperience) {
      filtered = filtered.filter(app => app.experience === filterExperience);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      } else if (sortBy === 'name') {
        return a.full_name.localeCompare(b.full_name);
      }
      return 0;
    });

    return filtered;
  }, [applications, searchQuery, filterPosition, filterExperience, sortBy]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setFilterPosition('');
    setFilterExperience('');
    setSortBy('newest');
  };

  const hasActiveFilters = searchQuery || filterPosition || filterExperience || sortBy !== 'newest';

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading-spinner">Loading applications...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-container">
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchApplications} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Job Applications</h1>
        <div className="header-actions">
          <button onClick={fetchApplications} className="refresh-button">
            Refresh
          </button>
          <span className="count-badge">
            {filteredApplications.length} of {applications.length} applications
          </span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filters-header">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-button"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`filter-toggle-button ${showFilters ? 'active' : ''}`}
          >
            <Filter size={20} />
            Filters
            {hasActiveFilters && <span className="filter-badge"></span>}
          </button>
        </div>

        {showFilters && (
          <div className="filters-panel">
            <div className="filter-group">
              <label className="filter-label">Position</label>
              <select
                value={filterPosition}
                onChange={(e) => setFilterPosition(e.target.value)}
                className="filter-select"
              >
                <option value="">All Positions</option>
                {allPositions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Experience</label>
              <select
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value)}
                className="filter-select"
              >
                <option value="">All Experience Levels</option>
                {experienceLevels.map((exp) => (
                  <option key={exp} value={exp}>
                    {exp}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'name')}
                className="filter-select"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="clear-filters-button">
                <X size={16} />
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>

      {applications.length === 0 ? (
        <div className="empty-state">
          <p>No applications submitted yet.</p>
        </div>
      ) : filteredApplications.length === 0 ? (
        <div className="empty-state">
          <p>No applications match your filters.</p>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="clear-filters-button">
              Clear Filters
            </button>
          )}
        </div>
      ) : (
        <div className="applications-grid">
          {filteredApplications.map((app) => (
            <div key={app.id} className="application-card">
              <div className="card-header">
                <h3>{app.full_name}</h3>
                <span className="application-id">#{app.id}</span>
              </div>
              
              <div className="card-body">
                <div className="info-row">
                  <span className="label">Position:</span>
                  <span className="value">{app.position}</span>
                </div>
                
                <div className="info-row">
                  <span className="label">Email:</span>
                  <a href={`mailto:${app.email}`} className="value link">
                    {app.email}
                  </a>
                </div>
                
                <div className="info-row">
                  <span className="label">Phone:</span>
                  <a href={`tel:${app.mobile}`} className="value link">
                    {app.mobile}
                  </a>
                </div>
                
                <div className="info-row">
                  <span className="label">Experience:</span>
                  <span className="value">{app.experience}</span>
                </div>
                
                <div className="info-row">
                  <span className="label">Applied:</span>
                  <span className="value">{formatDate(app.created_at)}</span>
                </div>
              </div>

              <div className="card-footer">
                <button
                  onClick={() => openResume(app.resume)}
                  className="resume-button"
                >
                  View Resume
                </button>
                <button
                  onClick={() => setSelectedApp(app)}
                  className="details-button"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Application Details</h2>
              <button
                className="close-button"
                onClick={() => setSelectedApp(null)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-section">
                <h3>Personal Information</h3>
                <div className="detail-grid">
                  <div>
                    <strong>Full Name:</strong>
                    <p>{selectedApp.full_name}</p>
                  </div>
                  <div>
                    <strong>Email:</strong>
                    <p>
                      <a href={`mailto:${selectedApp.email}`}>
                        {selectedApp.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <strong>Phone:</strong>
                    <p>
                      <a href={`tel:${selectedApp.mobile}`}>
                        {selectedApp.mobile}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Application Details</h3>
                <div className="detail-grid">
                  <div>
                    <strong>Position:</strong>
                    <p>{selectedApp.position}</p>
                  </div>
                  <div>
                    <strong>Experience:</strong>
                    <p>{selectedApp.experience}</p>
                  </div>
                  <div>
                    <strong>Applied On:</strong>
                    <p>{formatDate(selectedApp.created_at)}</p>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Resume</h3>
                <button
                  onClick={() => openResume(selectedApp.resume)}
                  className="resume-button-large"
                >
                  Open Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

