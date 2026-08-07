CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0
);

insert into tasks (title,done) values (
    'buy milk',
    1
);

insert into tasks (title,done) values (
    'buy groceries',
    0
);

insert into tasks (title,done) values (
    'clean the dishes',
    1
);