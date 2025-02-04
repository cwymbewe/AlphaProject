import { google } from 'googleapis';

// Create a new instance of the Google Sheets API
const sheets = google.sheets('v4');

// Function to save data to Google Sheets
export const saveDataToSheet = async (data) => {
  const auth = await authorize(); // Implement your authorization logic here
  const request = {
    spreadsheetId: 'YOUR_SPREADSHEET_ID',
    range: 'Sheet1!A1', // Adjust the range as needed
    valueInputOption: 'RAW',
    resource: {
      values: [
        [data.user, data.location, ...data.stock.map(item => `${item.empty}, ${item.full}`)]
      ],
    },
    auth: auth,
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Data saved to Google Sheets:', response.data);
  } catch (error) {
    console.error('Error saving data to Google Sheets:', error);
  }
};

// Implement your authorization logic here
const authorize = async () => {
  // Logic to authenticate and return the auth client
};
