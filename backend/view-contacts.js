const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Contact Schema (same as in server.js)
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  submittedAt: { type: Date, default: Date.now },
  ipAddress: String,
  userAgent: String
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// Function to view all contacts
async function viewAllContacts() {
  try {
    console.log('📋 Fetching all contact submissions...\n');
    
    const contacts = await Contact.find()
      .sort({ submittedAt: -1 }) // Most recent first
      .select('-__v');

    if (contacts.length === 0) {
      console.log('📭 No contact submissions found yet.');
      return;
    }

    console.log(`📊 Total Contact Submissions: ${contacts.length}\n`);
    console.log('=' + '='.repeat(80));

    contacts.forEach((contact, index) => {
      console.log(`\n📧 Contact #${index + 1}`);
      console.log('─'.repeat(50));
      console.log(`👤 Name:     ${contact.name}`);
      console.log(`📧 Email:    ${contact.email}`);
      console.log(`📋 Subject:  ${contact.subject || 'No subject'}`);
      console.log(`💬 Message:  ${contact.message}`);
      console.log(`📅 Date:     ${contact.submittedAt.toLocaleString()}`);
      console.log(`🌐 IP:       ${contact.ipAddress || 'N/A'}`);
      console.log(`💻 Browser:  ${contact.userAgent ? contact.userAgent.substring(0, 50) + '...' : 'N/A'}`);
      console.log(`🆔 ID:       ${contact._id}`);
    });

    console.log('\n' + '=' + '='.repeat(80));
    console.log(`\n✅ Displayed ${contacts.length} contact submissions.`);

  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Function to view latest contact
async function viewLatestContact() {
  try {
    const latestContact = await Contact.findOne().sort({ submittedAt: -1 });
    
    if (!latestContact) {
      console.log('📭 No contact submissions found.');
      return;
    }

    console.log('\n📧 Latest Contact Submission:');
    console.log('─'.repeat(50));
    console.log(`👤 Name:     ${latestContact.name}`);
    console.log(`📧 Email:    ${latestContact.email}`);
    console.log(`📋 Subject:  ${latestContact.subject || 'No subject'}`);
    console.log(`💬 Message:  ${latestContact.message}`);
    console.log(`📅 Date:     ${latestContact.submittedAt.toLocaleString()}`);
    console.log(`🌐 IP:       ${latestContact.ipAddress || 'N/A'}`);

  } catch (error) {
    console.error('❌ Error fetching latest contact:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Function to search contacts by email
async function searchByEmail(email) {
  try {
    const contacts = await Contact.find({ 
      email: { $regex: email, $options: 'i' } 
    }).sort({ submittedAt: -1 });

    if (contacts.length === 0) {
      console.log(`📭 No contacts found for email: ${email}`);
      return;
    }

    console.log(`\n📊 Found ${contacts.length} contact(s) for email: ${email}\n`);
    
    contacts.forEach((contact, index) => {
      console.log(`📧 Contact #${index + 1} - ${contact.submittedAt.toLocaleDateString()}`);
      console.log(`💬 Message: ${contact.message.substring(0, 100)}...`);
      console.log('─'.repeat(30));
    });

  } catch (error) {
    console.error('❌ Error searching contacts:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Command line interface
const command = process.argv[2];
const parameter = process.argv[3];

switch (command) {
  case 'all':
    viewAllContacts();
    break;
  case 'latest':
    viewLatestContact();
    break;
  case 'search':
    if (parameter) {
      searchByEmail(parameter);
    } else {
      console.log('❌ Please provide an email to search for: node view-contacts.js search email@example.com');
    }
    break;
  default:
    console.log(`
🔍 Contact Data Viewer - Portfolio Database

Usage:
  node view-contacts.js all              - View all contact submissions
  node view-contacts.js latest           - View latest contact submission  
  node view-contacts.js search <email>   - Search contacts by email

Examples:
  node view-contacts.js all
  node view-contacts.js latest
  node view-contacts.js search john@example.com
    `);
}
