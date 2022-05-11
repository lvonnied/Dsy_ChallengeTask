DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos WITH OWNER = postgres;

\c todos

CREATE TABLE todo (
    id              SERIAL PRIMARY KEY,
    due             TIMESTAMP NOT NULL,
    created         TIMESTAMP NOT NULL,
    title           TEXT NOT NULL,
    importance      INT NOT NULL,
    completion      BOOLEAN NOT NULL,
    description     TEXT
);

insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-09-19 14:59:00', '2021-08-12 09:58:37', 'Support', 4, false, 'Inverse');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-02-11 04:38:38', '2022-01-03 03:12:57', 'Training', 2, false, 'superstructure');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-07-27 11:45:55', '2022-01-06 08:12:34', 'Product Management', 2, true, 'multi-state');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-05-16 22:34:27', '2022-02-15 07:08:40', 'Training', 5, false, 'Robust');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-30 12:00:17', '2021-09-25 10:03:40', 'Human Resources', 1, true, 'Business-focused');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-01-24 03:00:03', '2022-03-25 18:58:03', 'Human Resources', 1, true, 'flexibility');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-06-12 22:23:58', '2021-07-10 04:18:53', 'Accounting', 3, true, 'heuristic');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-12-03 04:19:19', '2021-10-13 00:58:44', 'Sales', 5, true, 'next generation');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-06-27 09:57:35', '2021-05-22 05:22:50', 'Support', 4, true, 'Seamless');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-02 11:57:05', '2021-11-18 09:12:09', 'Business Development', 5, false, 'Optimized');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-06 10:16:50', '2022-04-19 13:27:31', 'Business Development', 5, true, 'installation');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-01-21 17:41:57', '2021-06-13 15:23:30', 'Engineering', 4, false, 'open architecture');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-08-13 10:52:31', '2021-10-01 11:21:06', 'Engineering', 3, false, 'challenge');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-07-01 20:10:59', '2022-04-10 16:14:12', 'Product Management', 2, false, 'Team-oriented');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-10-15 13:27:11', '2021-08-02 19:08:33', 'Training', 3, true, 'Graphic Interface');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-09-15 20:08:02', '2021-12-01 14:35:34', 'Engineering', 3, false, 'neutral');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-08-11 16:22:21', '2022-02-05 15:59:00', 'Marketing', 3, true, 'Universal');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-04-09 05:20:20', '2021-09-08 01:56:10', 'Research and Development', 1, false, 'flexibility');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-17 12:29:29', '2022-03-27 11:36:54', 'Engineering', 5, false, 'regional');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-17 05:07:57', '2021-11-04 03:53:28', 'Marketing', 5, true, 'Organic');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-09-01 23:34:54', '2021-11-25 07:58:49', 'Product Management', 5, true, 'Exclusive');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-09-12 16:05:26', '2022-01-25 09:23:09', 'Sales', 1, false, 'tangible');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-07-14 11:22:16', '2021-08-01 09:59:30', 'Engineering', 1, true, 'Programmable');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-15 15:52:51', '2022-03-06 03:51:19', 'Services', 4, true, 'encompassing');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-16 07:04:36', '2021-08-14 14:48:20', 'Accounting', 4, false, 'user-facing');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-12-04 22:44:50', '2021-05-11 19:54:12', 'Business Development', 5, false, 'multimedia');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-04-22 16:06:29', '2022-01-30 02:41:09', 'Legal', 3, true, 'collaboration');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-07-27 19:20:28', '2021-09-28 09:40:09', 'Engineering', 3, false, 'circuit');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-10-06 00:57:37', '2022-01-23 09:21:38', 'Research and Development', 5, true, 'Synergized');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-07-22 08:25:16', '2021-09-17 09:38:01', 'Research and Development', 1, true, 'Assimilated');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-02-04 16:10:28', '2022-01-26 00:23:52', 'Legal', 1, true, 'neutral');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-05-18 03:27:07', '2022-02-22 13:10:25', 'Accounting', 1, false, 'regional');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-12-29 12:41:27', '2021-08-01 17:19:14', 'Accounting', 5, false, 'moderator');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-10-09 08:02:35', '2021-10-21 02:18:03', 'Accounting', 1, true, 'multi-state');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-06-02 14:22:38', '2021-11-09 22:40:18', 'Support', 3, false, 'implementation');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-17 07:03:26', '2022-04-07 09:20:14', 'Accounting', 2, true, 'hub');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-06-22 02:41:03', '2021-10-30 10:42:38', 'Human Resources', 2, true, 'Networked');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-08-20 04:45:04', '2022-03-10 06:26:54', 'Research and Development', 3, false, 'Advanced');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-08 22:15:57', '2021-08-26 17:43:03', 'Support', 3, true, 'open architecture');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-02-16 12:47:31', '2022-03-10 18:22:07', 'Marketing', 2, false, 'utilisation');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-12-05 13:57:25', '2022-02-27 22:58:27', 'Accounting', 2, true, 'neural-net');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-04-01 09:27:01', '2022-03-29 05:42:42', 'Legal', 4, true, '6th generation');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-04-21 21:01:29', '2021-07-20 12:43:57', 'Services', 5, true, 'Implemented');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-02-05 11:46:05', '2021-09-01 14:46:37', 'Human Resources', 4, true, 'secondary');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-03-05 12:56:37', '2021-07-28 19:05:36', 'Human Resources', 3, false, 'radical');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-02-23 18:26:20', '2021-12-29 17:03:51', 'Human Resources', 4, false, 'Function-based');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2022-01-10 18:10:02', '2021-10-26 09:05:16', 'Engineering', 5, false, 'Progressive');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-10-08 14:49:58', '2022-03-14 02:00:18', 'Engineering', 3, true, 'encompassing');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-12 11:57:59', '2021-10-10 03:14:19', 'Support', 4, false, 'Object-based');
insert into todo (id, due, created, title, importance, completion, description) values (DEFAULT, '2021-11-07 14:35:12', '2022-01-14 23:54:42', 'Services', 3, false, 'Distributed');
