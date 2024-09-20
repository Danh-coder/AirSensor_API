function insertChiSoDat(ChiSoDat) {
    return `INSERT INTO public."TheoDoiChiSoDat"("ChiSoDat")
	VALUES ('${JSON.stringify(ChiSoDat)}'::jsonb);`
}

function selectChiSoDat() {
    return `SELECT "ChiSoDat_ID", "ChiSoDat", "Datetime"
            FROM public."TheoDoiChiSoDat"
            ORDER BY "Datetime" DESC
            LIMIT 100;`
}

function createTable() {
    return `CREATE TABLE IF NOT EXISTS public."TheoDoiChiSoDat"
(
    "ChiSoDat_ID" SERIAL PRIMARY KEY, -- Auto-incrementing ID
    "ChiSoDat" jsonb,
    "Datetime" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL -- Default to current time
);
`
}

export default {
    insertChiSoDat,
    selectChiSoDat,
    createTable
}