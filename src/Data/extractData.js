import data from "./data.js";

function extractData(data) {
    const manufacturers = {};
    const ranges = {};
    const years = {};

    // Using reduce to process the data
    data.forEach(vehicle => {
        // Count manufacturers
        const make = vehicle.Make || "Unknown"; // Default to "Unknown" if make is not defined
        manufacturers[make] = (manufacturers[make] || 0) + 1;

        // Count electric ranges
        const range = vehicle.Range;
        if (range < 100) {
            ranges['0-100'] = (ranges['0-100'] || 0) + 1;
        } else if (range < 200) {
            ranges['100-200'] = (ranges['100-200'] || 0) + 1;
        } else if (range < 300) {
            ranges['200-300'] = (ranges['200-300'] || 0) + 1;
        } else if (range < 400) {
            ranges['300-400'] = (ranges['300-400'] || 0) + 1;
        } else {
            ranges['400+'] = (ranges['400+'] || 0) + 1;
        }

        // Count vehicles by year
        const year = vehicle.Year;
        years[year] = (years[year] || 0) + 1;
    });

    return { manufacturers, ranges, years };
}

const { manufacturers, ranges, years } = extractData(data);

console.log(manufacturers);
console.log(ranges);
console.log(years);