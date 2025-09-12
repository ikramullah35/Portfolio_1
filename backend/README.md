# Portfolio Backend API

A Node.js/Express backend for handling contact form submissions in your portfolio website.

## Features

- ✅ **Contact Form API** - Handle form submissions
- ✅ **MongoDB Database** - Store all contact messages  
- ✅ **Data Validation** - Validate email and required fields
- ✅ **CORS Support** - Allow frontend connections
- ✅ **Admin Endpoints** - View all submissions
- ✅ **Error Handling** - Proper error responses

## Quick Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Install MongoDB (if not installed)
```bash
# Windows (using Chocolatey)
choco install mongodb

# Or download from: https://www.mongodb.com/try/download/community
```

### 3. Start MongoDB
```bash
# Start MongoDB service
mongod

# Or if installed as service, it should start automatically
```

### 4. Create Environment File
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
```

### 5. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The server will run on: http://localhost:5000

## API Endpoints

### POST /api/contact
Submit a contact form message
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Hello",
  "message": "Your message here"
}
```

### GET /api/contacts
Get all contact submissions (admin use)

### GET /api/contacts/:id
Get a specific contact submission

### DELETE /api/contacts/:id
Delete a contact submission

## Database Schema

Contact messages are stored with:
- `name` - Sender's name (required)
- `email` - Sender's email (required)
- `subject` - Message subject (optional)
- `message` - Message content (required)
- `submittedAt` - Timestamp
- `ipAddress` - Sender's IP
- `userAgent` - Browser info

## Testing the API

### Using curl:
```bash
# Test contact submission
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Message",
    "message": "This is a test message"
  }'
```

### Using your browser:
Visit: http://localhost:5000 to see if the server is running

## Production Deployment

### Heroku:
1. Install Heroku CLI
2. Create Heroku app: `heroku create your-portfolio-api`
3. Set environment variables: `heroku config:set MONGODB_URI=your-mongodb-connection-string`
4. Deploy: `git push heroku main`

### Railway/Render:
1. Connect your GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/portfolio` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` or `production` |
| `FRONTEND_URL` | Your portfolio URL | `http://localhost:5174` |

## Troubleshooting

### MongoDB Connection Issues:
1. Make sure MongoDB is running: `mongod`
2. Check connection string in `.env`
3. Ensure database permissions

### CORS Issues:
1. Update `FRONTEND_URL` in `.env`
2. Add your domain to CORS origins in `server.js`

### Port Issues:
1. Change `PORT` in `.env`
2. Update frontend API URL accordingly

## Security Notes

- Always validate user input
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add authentication for admin endpoints
- Use HTTPS in production

## Contact

If you need help setting this up, contact:
📧 ikramulllah35000@gmail.com
