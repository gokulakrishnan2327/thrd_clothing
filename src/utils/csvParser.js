import Papa from 'papaparse';

export const parseCSV = (csvFile) => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvFile, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (result) => resolve(result.data),
            error: (error) => reject(error)
        });
    });
};

