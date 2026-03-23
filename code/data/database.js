class Database {
    constructor() {
        this.data = {};
        this.id = 0;
    }

    create(table, record) {
        if (!this.data[table]) {
            this.data[table] = [];
        }
        record.id = ++this.id;
        this.data[table].push(record);
        return record;
    }

    read(table, id) {
        if (!this.data[table]) return null;
        return this.data[table].find(record => record.id === id);
    }

    readAll(table) {
        return this.data[table] || [];
    }

    update(table, id, updates) {
        if (!this.data[table]) return null;
        const record = this.data[table].find(r => r.id === id);
        if (record) {
            Object.assign(record, updates);
        }
        return record;
    }

    delete(table, id) {
        if (!this.data[table]) return false;
        this.data[table] = this.data[table].filter(r => r.id !== id);
        return true;
    }
}

module.exports = Database;