import React, { useState, useEffect } from 'react'

const ConnectionStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState({
    backend: 'checking',
    database: 'checking',
    lastCheck: null
  })

  const checkBackendConnection = async () => {
    try {
      // Add timeout for faster response
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

      const response = await fetch('http://localhost:5000/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (response.ok) {
        const data = await response.json()
        setConnectionStatus(prev => ({
          ...prev,
          backend: 'connected',
          lastCheck: new Date().toLocaleTimeString()
        }))
        
        // Also check database status with timeout
        try {
          const dbController = new AbortController()
          const dbTimeoutId = setTimeout(() => dbController.abort(), 5000)
          
          const dbResponse = await fetch('http://localhost:5000/api/dashboard/stats', {
            signal: dbController.signal
          })
          
          clearTimeout(dbTimeoutId)
          
          if (dbResponse.ok) {
            const dbData = await dbResponse.json()
            setConnectionStatus(prev => ({
              ...prev,
              database: 'connected'
            }))
          } else {
            setConnectionStatus(prev => ({
              ...prev,
              database: 'warning' // Backend works but no database
            }))
          }
        } catch (dbError) {
          console.log('Database check failed:', dbError.message)
          setConnectionStatus(prev => ({
            ...prev,
            database: 'warning' // Backend works but database connection issue
          }))
        }
      } else {
        throw new Error(`Backend responded with status: ${response.status}`)
      }
    } catch (error) {
      console.log('Backend connection check:', error.message)
      setConnectionStatus(prev => ({
        ...prev,
        backend: 'disconnected',
        database: 'disconnected',
        lastCheck: new Date().toLocaleTimeString()
      }))
    }
  }

  useEffect(() => {
    // Check connection on mount
    checkBackendConnection()
    
    // Check every 30 seconds
    const interval = setInterval(checkBackendConnection, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'text-green-600 bg-green-100'
      case 'disconnected': return 'text-red-600 bg-red-100'
      case 'warning': return 'text-orange-600 bg-orange-100'
      case 'checking': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': return '✅'
      case 'disconnected': return '❌'
      case 'warning': return '⚠️'
      case 'checking': return '⏳'
      default: return '❓'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-[250px]">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-800 text-sm">System Status</h4>
          <button 
            onClick={checkBackendConnection}
            className="text-blue-600 hover:text-blue-800 text-xs"
            title="Refresh connection status"
          >
            🔄
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Backend API:</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(connectionStatus.backend)}`}>
              {getStatusIcon(connectionStatus.backend)} {connectionStatus.backend}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Database:</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(connectionStatus.database)}`}>
              {getStatusIcon(connectionStatus.database)} {connectionStatus.database}
            </span>
          </div>
          
          {connectionStatus.lastCheck && (
            <div className="text-xs text-gray-500 mt-2 pt-2 border-t">
              Last check: {connectionStatus.lastCheck}
            </div>
          )}
        </div>
        
        {connectionStatus.backend === 'connected' && (
          <div className="mt-3 pt-2 border-t">
            <a 
              href="http://localhost:5000/admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
            >
              📊 Open Admin Dashboard →
            </a>
          </div>
        )}
        
        {connectionStatus.backend === 'disconnected' && (
          <div className="mt-3 pt-2 border-t">
            <div className="text-xs text-red-600">
              💡 Start backend: <code className="bg-red-50 px-1 rounded">cd backend && npm run dev</code>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConnectionStatus
