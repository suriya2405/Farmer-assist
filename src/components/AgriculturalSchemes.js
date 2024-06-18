// src/components/AgriculturalSchemes.js
import React from 'react';

const agriculturalSchemes = [
  { id: 1, title: 'Agriculture Infrastructure Fund', publishDate: '12-06-2024', details: 'Link', link: 'https://agriinfra.dac.gov.in/' },
  { id: 2, title: 'PM-Kisan Samman Nidhi', publishDate: '28-12-2023', details: 'Link', link: 'https://pmkisan.gov.in/' },
  { id: 3, title: 'ATMA', publishDate: '03-10-2018', details: 'Download (1.17 MB) pdf', link: 'https://extensionreforms.da.gov.in/DashBoard_Statusatma.aspx' },
  { id: 4, title: 'AGMARKNET', publishDate: '14-03-2014', details: 'Download (1.03 MB) pdf', link: 'https://extensionreforms.da.gov.in/DashBoard_Statusatma.aspx' },
  { id: 5, title: 'Horticulture', publishDate: '05-04-2014', details: 'Download (691.68 KB) pdf', link: 'https://midh.gov.in/nhmapplication/feedback/midhKPI.aspx' },
  { id: 6, title: 'Online Pesticide Registration', publishDate: '23-09-2009', details: 'Download (1.25 MB) pdf', link: 'https://agriwelfare.gov.in/Documents/Pesticides_Registration.pdf' },
  { id: 7, title: 'Plant Quarantine Clearance', publishDate: '05-01-2011', details: 'Download (8.89 MB) pdf', link: 'https://pqms.cgg.gov.in/pqms-angular/home' },
  { id: 8, title: 'DBT in Agriculture', publishDate: '12-05-2014', details: 'Download (749.24 KB) pdf', link: 'https://www.dbtdacfw.gov.in/' },
  { id: 9, title: 'Pradhanmantri Krishi Sinchayee Yojana', publishDate: '06-05-2016', details: 'Download (244.46 KB) pdf', link: 'https://pmksy.gov.in/' },
  { id: 10, title: 'Kisan Call Center', publishDate: '01-05-2015', details: 'Link', link: 'https://farmer.gov.in/kcc.aspx' },
  { id: 11, title: 'mKisan', publishDate: '06-05-2015', details: 'Link', link: 'https://mkisan.gov.in/' },
  { id: 12, title: 'Jaivik Kheti', publishDate: '18-05-2015', details: 'Download (1.24 MB) pdf', link: 'https://jaivikkheti.in/' },
  { id: 13, title: 'e-Nam', publishDate: '04-10-2016', details: 'Download (459.07 KB) pdf', link: 'https://enam.gov.in/' },
  { id: 14, title: 'Soil Health Card', publishDate: '01-09-2016', details: 'Download (1.1 MB) pdf', link: 'https://soilhealth.dac.gov.in/' },
  { id: 15, title: 'Pradhan Mantri Fasal Bima Yojana', publishDate: '05-08-2017', details: 'Download (1.09 MB) pdf', link: 'https://pmfby.gov.in/' },
];

const AgriculturalSchemes = () => {
  return (
    <div className="min-h-screen p-8" style={{ background: 'linear-gradient(to top, #0fd850 0%, #f9f047 100%)' }}>
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Agricultural Schemes Details</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-4 py-2 border-b">SR. NO</th>
              <th className="px-4 py-2 border-b">TITLE</th>
              <th className="px-4 py-2 border-b">PUBLISH DATE</th>
              <th className="px-4 py-2 border-b">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {agriculturalSchemes.map((scheme, index) => (
              <tr key={scheme.id} className="text-center even:bg-gray-100 odd:bg-white">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{scheme.title}</td>
                <td className="px-4 py-2 border-b">{scheme.publishDate}</td>
                <td className="px-4 py-2 border-b">
                  {scheme.details.includes('Download') ? (
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {scheme.details}
                    </a>
                  ) : (
                    <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                      {scheme.details}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgriculturalSchemes;
