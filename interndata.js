const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: ['https://www.oasisintern.com', 'http://localhost:3000/'],  
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
  }));

  // Business applications
const internshipsBusiness = [
    {
        company: 'Jahez',
        role: 'All Departments Internship',
        location: 'Saudia Arabia',
        imageUrl: '/Images/Jahez.png',
        applyLink: 'https://career.jahez.net',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Nahdi',
        role: 'Accountant Internship',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/Nahdi.png',
        applyLink: 'https://www.drjobpro.com/job/view/2855654?source=jooble',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Google',
        role: 'Business Analyst Intern',
        location: 'Dubai, United Arab Emirates',
        imageUrl: '/Images/Google.png',
        applyLink: 'https://www.karkidi.com/job-details/54352-business-intern-2024-sales-job?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Emirates',
        role: 'All Departments Internship (Nationals only)',
        location: 'Dubai, United Arab Emirates',
        imageUrl: '/Images/Emirates.png',
        applyLink: 'https://www.emiratesgroupcareers.com/search-and-apply/379622',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Pepsico',
        role: ' Accountant Internship ',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/Pepsico.png',
        applyLink: 'https://grabjobs.co/saudi-arabia/job/full-time/media-communications/intern-accounting-with-great-benefits-50236629?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'HungerStation',
        role: 'All Department COOP',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/HungerStation.png',
        applyLink: 'https://apply.workable.com/hungerstation/j/72A4F52BD6/',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Nestle',
        role: 'Sales or Marketing Internship',
        location: 'Jeddah, Saudia Arabia',
        imageUrl: '/Images/Nestle.png',
        applyLink: 'https://sa.bebee.com/job/de17efe9d84a82efb927821203dd5f1a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'DHL',
        role: 'Sales Analyst Internship',
        location: ' Old Al Ghanim, Qatar',
        imageUrl: '/Images/DHLWW.png',
        applyLink: 'https://www.mncjobsgulf.com/jobs/internship-sales-analyst-old-al-ghanim-1474179?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic#google_vignette',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'P&G',
        role: 'Finance and Accounting Internship',
        location: 'Dubai, United Arab Emirates',
        imageUrl: '/Images/P&G.png',
        applyLink: 'https://jobsitedirect.co.uk/job/232/finance-and-accounting-internship-dubai?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Asterix Communications',
        role: 'Corporate Accounting Internship',
        location: 'Yanbu, Saudia Arabia',
        imageUrl: '/Images/Asterix.png',
        applyLink: 'https://sa.talent.com/view?id=851252937f7a&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Alpin limited',
        role: 'Business Development and Marketing Intern',
        location: 'Abu Dhabi, United Arab Emirates',
        imageUrl: '/Images/Alpin.png',
        applyLink: 'https://grabjobs.co/uae/job/full-time/others/business-development-and-marketing-intern-50890782?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Zid',
        role: 'Accountant/ Finance Internship',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/Zid.png',
        applyLink: 'https://www.jisr.net/en/zid/careers/4d41c0d6-b5fc-426b-b2c6-5e1e02bbf50c?host=1',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'i Talent',
        role: 'Accountant Internship',
        location: 'Al Kober, Saudia Arabia',
        imageUrl: '/Images/Italent.png',
        applyLink: 'https://www.bayt.com/ar/saudi-arabia/jobs/accounts-internship-saudi-nationals-only-5120777/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Aramco',
        role: 'All departments Internship',
        location: 'Saudia Arabia',
        imageUrl: '/Images/Aramco.png',
        applyLink: 'https://www.aramco.com/en/careers/for-saudi-applicants/student-opportunities/university-and-vocational-college-internship-programs/university-internship-program',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Tamara',
        role: 'Instore Operations Internship',
        location: 'Kuwait',
        imageUrl: '/Images/Tamara.png',
        applyLink: 'https://tamara.co/jobs',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Saudia ',
        role: 'All Departments COOP',
        location: 'Saudia Arabia',
        imageUrl: '/Images/SaudiaAir.png',
        applyLink: 'https://www.saudia.com/help/careers/cooperative-training',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Qatar Airways ',
        role: 'All Departments Internship',
        location: 'Qatar',
        imageUrl: '/Images/QatarAirways.png',
        applyLink: 'https://www.qatarairways.com/en/nationalisation/internship-programme.html',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
];

  // Engineering applications
const internshipsEng= [
    {
        company: 'Salla',
        role: 'Product Development Internship',
        location: 'Makkah Al mukarramah, Saudia Arabia',
        imageUrl: '/Images/Salla.png',
        applyLink: 'https://apply.workable.com/salla/j/4066711BF0/',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'HungerStation',
        role: 'All Department COOP',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/HungerStation.png',
        applyLink: 'https://apply.workable.com/hungerstation/j/72A4F52BD6/',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Arabic Computer Systems',
        role: 'Software Development Internship',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/ACS.png',
        applyLink: 'https://jobs.workable.com/view/p2hS7tq68SnwnZZZjsqZ5U/internship-software-development-in-riyadh-at-arabic-computer-systems',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Oasis Intern',
        role: 'Software Development Internship',
        location: 'Remote, Saudia Arabia',
        imageUrl: '/Images/Goat4.png',
        applyLink: '/oasis',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Honeywell',
        role: 'Chemical Engineering Internship',
        location: 'Al Dharan, Saudia Arabia',
        imageUrl: '/Images/Honeywell.png',
        applyLink: 'https://sa.jooble.org/jdp/-7841710399913912855?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Elm',
        role: 'Software Engineer COOP',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/Elm.png',
        applyLink: 'https://career.elm.sa/elm/job/Riyadh-Coop-Training-Software-Engineering%28JuneJulyAugust-2024-Intake%29-Job/1130979200/',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Field Core',
        role: 'Field Engineer Internship',
        location: 'Remote, Saudia Arabia',
        imageUrl: '/Images/FieldCore.png',
        applyLink: 'https://www.fieldcore.com/careers/jobs/?p=job/ol60tfwE&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&nl=1',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
  
      {
        company: 'Hitchi',
        role: 'Engineer Internship',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/Hitachi.png',
        applyLink: 'https://sa.joblum.com/job/engineering-intern/146176?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Baker Hughes',
        role: 'Mechanical, Electrical, Computer or Petroleum Engineering Internship',
        location: 'Dhahran, Saudia Arabia',
        imageUrl: '/Images/BakerHughes.png',
        applyLink: 'https://careers.bakerhughes.com/global/en/job/BAHUGLOBALR104069/University-Internships-Summer-CO-OP-Saudi-Arabia-2024?utm_source=linkedin&utm_medium=phenom-feeds',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'P&G',
        role: 'Process Engineers Internship',
        location: 'Dammam, Saudia Arabia',
        imageUrl: '/Images/P&G.png',
        applyLink: 'https://www.pgcareers.com/global/en/job/R000098659/P-G-Dammam-Internship-Program-2024-Process-Engineer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Aramco',
        role: 'All departments Internship',
        location: 'Saudia Arabia',
        imageUrl: '/Images/Aramco.png',
        applyLink: 'https://www.aramco.com/en/careers/for-saudi-applicants/student-opportunities/university-and-vocational-college-internship-programs/university-internship-program',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Saudia ',
        role: 'All Departments COOP',
        location: 'Saudia Arabia',
        imageUrl: '/Images/SaudiaAir.png',
        applyLink: 'https://www.saudia.com/help/careers/cooperative-training',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Qatar Airways ',
        role: 'All Departments Internship',
        location: 'Qatar',
        imageUrl: '/Images/QatarAirways.png',
        applyLink: 'https://www.qatarairways.com/en/nationalisation/internship-programme.html',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
      
      {
        company: 'Jahez',
        role: 'All Departments Internship',
        location: 'Saudia Arabia',
        imageUrl: '/Images/Jahez.png',
        applyLink: 'https://career.jahez.net',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },

  
];
   // Legal applications
const internshipsLegal= [
    {
        company: 'White & Case',
        role: 'Law COOP - Intern',
        location: 'Riyadh, Saudia Arabia',
        imageUrl: '/Images/WhiteandCase.png',
        applyLink: 'https://www.themuse.com/jobs/whitecase/coop-intern-2024?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        status: 'Apply',
        colorcode: 'bg-lime-500'
      },
  
      {
        company: 'Aramco',
        role: 'All departments Internship',
        location: 'Saudia Arabia',
        imageUrl: '/Images/Aramco.png',
        applyLink: 'https://www.aramco.com/en/careers/for-saudi-applicants/student-opportunities/university-and-vocational-college-internship-programs/university-internship-program',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Saudia ',
        role: 'All Departments COOP',
        location: 'Saudia Arabia',
        imageUrl: '/Images/SaudiaAir.png',
        applyLink: 'https://www.saudia.com/help/careers/cooperative-training',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  
      {
        company: 'Qatar Airways ',
        role: 'All Departments Internship',
        location: 'Qatar',
        imageUrl: '/Images/QatarAirways.png',
        applyLink: 'https://www.qatarairways.com/en/nationalisation/internship-programme.html',
        status: 'Closed',
        colorcode: 'bg-red-600'
      },
  

  
];
// Endpoints for each web page
app.get('/api/internshipsBusiness', (req, res) => {
  res.json(internshipsBusiness);
});

app.get('/api/internshipsEng', (req, res) => {
    res.json(internshipsEng);
});

app.get('/api/internshipsLegal', (req, res) => {
    res.json(internshipsLegal);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
