function insertChiSoDat(ChiSoDat) {
    return `INSERT INTO public."TheoDoiChiSoDat"("ChiSoDat")
	VALUES ('${JSON.stringify(ChiSoDat)}'::jsonb);`
}

function selectChiSoDat() {
    return `SELECT "ChiSoDat_ID", "ChiSoDat", "Time"
            FROM public."TheoDoiChiSoDat"
            ORDER BY "Time" DESC
            LIMIT 100;`
}

function createTable() {
    return `CREATE TABLE IF NOT EXISTS public."TheoDoiChiSoDat"
(
    "ChiSoDat_ID" SERIAL PRIMARY KEY, -- Auto-incrementing ID
    "ChiSoDat" jsonb,
    "Time" TIME WITHOUT TIME ZONE DEFAULT CURRENT_TIME NOT NULL -- Default to current time
);
`
}

export default {
    insertChiSoDat,
    selectChiSoDat,
    createTable
}