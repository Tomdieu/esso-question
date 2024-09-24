import { IdeoGrammeType } from '@/schema/index.schema';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing'; // Optionally share the PDF

// The updated HTML generation function
const ideogramToHtml = (ideogram: IdeoGrammeType) => {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Ideogram Report - ${ideogram.project_name}</h1>
        <table>
          <tr>
            <th>Problems</th>
            <th>Solutions</th>
            <th>Results</th>
            <th>Tools Development</th>
            <th>Consumption Ways</th>
            <th>Capitalization Forms</th>
            <th>Architectural Models</th>
            <th>Structurers</th>
            <th>Ideas</th>
            <th>Modes of Thinking</th>
          </tr>
          ${Array.from({ length: ideogram.problems.length }).map((_, index) => `
            <tr>
              <td>${ideogram.problems[index]?.problem || ""}</td>
              <td>${ideogram.solutions[index]?.solution || ""}</td>
              <td>${ideogram.resultats[index]?.resultat || ""}</td>
              <td>${ideogram.outilsDevelopement[index]?.outil_developement.join(", ") || ""}</td>
              <td>${ideogram.voiesConsomation[index]?.voie_consomation.join(", ") || ""}</td>
              <td>${ideogram.formesCapitatlisation[index]?.forme_capitatlisation || ""}</td>
              <td>
                ${ideogram.modelesArchitectural[index]?.modele_architectural || ""}<br />
                <strong>Configuration:</strong> ${ideogram.modelesArchitectural[index]?.configuration.join(", ") || ""}
              </td>
              <td>
                ${ideogram.structurateurs[index]?.structurateur || ""}<br />
                <strong>Natures:</strong> ${ideogram.structurateurs[index]?.natures.join(", ") || ""}<br />
                <strong>Actions:</strong> ${ideogram.structurateurs[index]?.actions.join(", ") || ""}
              </td>
              <td>${ideogram.idees[index]?.idee || ""}</td>
              <td>${ideogram.modesDePensee[index]?.mode_de_pensee || ""}</td>
            </tr>
          `).join('')}
        </table>
      </body>
    </html>
  `;
};

// Function to print the ideogram
const printIdeogram = async (ideogram: IdeoGrammeType) => {
  const htmlContent = ideogramToHtml(ideogram);
  
  try {
    const { uri } = await Print.printToFileAsync({
      html: htmlContent,
      base64: false,
    });

    // Optionally share the PDF file after creating it
    await shareAsync(uri);
    
    console.log('PDF successfully created at: ', uri);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export default printIdeogram;
