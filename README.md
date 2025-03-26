# OutbreakX - Disease Prediction & Visualization System

The project is not completed yet!


## Project Overview:
OutbreakX is an AI-powered disease prediction and visualization platform that helps monitor and forecast disease outbreaks in different geographical regions. It leverages **machine learning models** and **interactive maps** to analyze real-time and historical data, providing insights into spread of diseases. The goal is to assist the healthcare organizations, researchers, and local authorities in **early detection and prevention of outbreaks**.

##  Features
-  Interactive Map: Visualizes disease outbreaks in different regions.
-  Machine Learning Prediction: Uses ML models to predict potential outbreaks.
-  Real-Time Data Updates: Integrates the historical and live data sources.
-  Location-Based Insights: Provides localized disease trends.
-  API Integration: Fetches external health data for better predictions.
-  User-Friendly UI: Designed for researchers, policymakers and the general public.

 Tech Stack:
- Frontend: Next.js, React, Leaflet.js (for maps)
- Backend: Flask (for ML model deployment)
- Machine Learning: TensorFlow, Scikit-Learn
- Database: PostgreSQL / Firebase (for storing outbreak data)
- Visualization: Chart.js, Leaflet.js

##  Machine Learning Model
OutbreakX uses supervised learning models to predict disease outbreaks based on:
- ** Historical Disease Data** (Influenza, COVID-19, Malaria, etc.)
- ** Environmental Factors** (Temperature, Humidity, Air Quality)
- ** Geographical Trends** (Population Density, Travel Data)
- ** Public Health Reports**

##  Dataset Sources
- **Johns Hopkins University COVID-19 Dataset**
- **CDC FluSight Data**
- **WHO Disease Outbreak Reports**
- **OpenStreetMap for Geo-Spatial Data**

##  Setup & Installation
### Prerequisites
- Node.js (for frontend)
- Python (for ML backend)
- PostgreSQL (or Firebase for database)

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/OutbreakX.git
   cd OutbreakX
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the Frontend**
   ```bash
   npm run dev
   ```

4. **Set up the Backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

5. **Launch the Application**
   - Open `http://localhost:3000` in your browser.



