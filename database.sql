DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos WITH OWNER = postgres;

\c todos

CREATE TABLE todo (
    id              SERIAL PRIMARY KEY,
    due             TIMESTAMP NOT NULL,
    created         TIMESTAMP NOT NULL,
    importance      INT NOT NULL,
    completion      BOOLEAN NOT NULL,
    description     TEXT
);

insert into todo (id, due, created, importance, completion, description) values (1, '2022-01-14 21:29:00', '2021-09-23 21:42:07', 1, true, 'Pre-emptive');
insert into todo (id, due, created, importance, completion, description) values (2, '2021-10-10 20:33:06', '2021-10-13 07:27:18', 2, true, 'initiative');
insert into todo (id, due, created, importance, completion, description) values (3, '2021-09-15 21:52:22', '2021-11-14 21:58:02', 5, false, 'asynchronous');
insert into todo (id, due, created, importance, completion, description) values (4, '2021-07-20 11:29:08', '2021-12-14 03:24:48', 1, false, 'asynchronous');
insert into todo (id, due, created, importance, completion, description) values (5, '2021-10-08 19:39:31', '2021-10-24 05:09:18', 1, false, 'Operative');
insert into todo (id, due, created, importance, completion, description) values (6, '2021-11-02 00:16:10', '2022-02-07 00:23:56', 1, true, 'groupware');
insert into todo (id, due, created, importance, completion, description) values (7, '2021-08-09 07:42:02', '2022-04-16 00:50:58', 1, true, 'value-added');
insert into todo (id, due, created, importance, completion, description) values (8, '2021-09-17 19:10:04', '2022-01-09 17:37:18', 4, false, 'Phased');
insert into todo (id, due, created, importance, completion, description) values (9, '2021-09-30 13:55:30', '2022-04-24 06:22:57', 3, false, 'composite');
insert into todo (id, due, created, importance, completion, description) values (10, '2022-03-23 16:27:49', '2022-03-30 22:04:12', 5, false, 'Public-key');
insert into todo (id, due, created, importance, completion, description) values (11, '2022-02-27 16:04:49', '2021-08-09 09:32:16', 3, false, 'uniform');
insert into todo (id, due, created, importance, completion, description) values (12, '2022-02-14 02:04:54', '2021-05-07 15:51:42', 1, true, 'eco-centric');
insert into todo (id, due, created, importance, completion, description) values (13, '2022-04-24 13:10:56', '2022-01-25 08:18:49', 2, true, 'Fundamental');
insert into todo (id, due, created, importance, completion, description) values (14, '2022-04-21 10:24:37', '2022-03-19 06:32:27', 2, true, 'Team-oriented');
insert into todo (id, due, created, importance, completion, description) values (15, '2021-05-16 17:09:02', '2022-04-21 14:45:57', 5, true, 'local');
insert into todo (id, due, created, importance, completion, description) values (16, '2021-06-19 09:18:20', '2021-11-08 15:57:27', 2, false, 'parallelism');
insert into todo (id, due, created, importance, completion, description) values (17, '2022-02-13 13:06:14', '2021-06-29 06:16:40', 2, true, 'intranet');
insert into todo (id, due, created, importance, completion, description) values (18, '2021-10-24 17:49:53', '2022-04-11 13:09:05', 3, true, 'eco-centric');
insert into todo (id, due, created, importance, completion, description) values (19, '2021-09-23 17:59:52', '2022-04-14 22:35:11', 3, true, 'Multi-tiered');
insert into todo (id, due, created, importance, completion, description) values (20, '2021-08-27 23:42:53', '2021-09-30 17:31:11', 2, true, 'analyzing');
insert into todo (id, due, created, importance, completion, description) values (21, '2021-05-31 10:36:02', '2022-02-25 03:51:36', 2, true, 'User-friendly');
insert into todo (id, due, created, importance, completion, description) values (22, '2021-11-25 20:00:33', '2021-07-12 22:44:16', 5, false, 'approach');
insert into todo (id, due, created, importance, completion, description) values (23, '2022-02-20 06:19:34', '2021-06-16 13:10:11', 3, true, 'radical');
insert into todo (id, due, created, importance, completion, description) values (24, '2021-05-30 16:08:09', '2021-08-02 12:44:01', 3, true, 'Team-oriented');
insert into todo (id, due, created, importance, completion, description) values (25, '2021-05-27 05:55:15', '2021-10-01 06:07:21', 4, true, 'task-force');
insert into todo (id, due, created, importance, completion, description) values (26, '2021-10-09 16:12:48', '2022-01-11 07:20:51', 5, true, 'encryption');
insert into todo (id, due, created, importance, completion, description) values (27, '2021-06-06 11:26:39', '2022-01-29 15:46:41', 4, true, 'standardization');
insert into todo (id, due, created, importance, completion, description) values (28, '2022-02-19 06:29:16', '2022-04-22 16:57:28', 5, true, 'Configurable');
insert into todo (id, due, created, importance, completion, description) values (29, '2021-09-23 18:35:10', '2021-08-12 19:02:31', 1, false, 'User-friendly');
insert into todo (id, due, created, importance, completion, description) values (30, '2021-08-03 23:11:40', '2021-08-23 11:47:47', 4, false, 'zero administration');
insert into todo (id, due, created, importance, completion, description) values (31, '2022-03-08 08:50:53', '2022-01-27 01:09:50', 5, false, '4th generation');
insert into todo (id, due, created, importance, completion, description) values (32, '2021-07-10 20:54:14', '2021-05-25 21:35:15', 3, true, 'upward-trending');
insert into todo (id, due, created, importance, completion, description) values (33, '2022-03-22 23:17:51', '2022-01-24 09:32:34', 2, true, 'zero defect');
insert into todo (id, due, created, importance, completion, description) values (34, '2022-02-06 05:12:18', '2021-11-30 10:21:48', 1, true, 'uniform');
insert into todo (id, due, created, importance, completion, description) values (35, '2022-02-27 09:44:36', '2022-02-03 12:10:20', 3, true, 'Proactive');
insert into todo (id, due, created, importance, completion, description) values (36, '2022-02-16 04:39:35', '2022-03-07 04:44:47', 5, false, 'collaboration');
insert into todo (id, due, created, importance, completion, description) values (37, '2021-05-05 00:40:46', '2021-08-04 18:49:06', 2, true, 'multi-tasking');
insert into todo (id, due, created, importance, completion, description) values (38, '2022-01-26 04:10:54', '2021-09-07 04:18:02', 3, true, 'standardization');
insert into todo (id, due, created, importance, completion, description) values (39, '2021-06-08 03:25:38', '2021-06-28 03:39:37', 1, false, 'context-sensitive');
insert into todo (id, due, created, importance, completion, description) values (40, '2021-08-03 23:02:22', '2021-06-04 18:36:48', 3, false, 'incremental');
insert into todo (id, due, created, importance, completion, description) values (41, '2021-06-17 22:48:38', '2021-06-13 17:46:20', 1, true, 'Graphical User Interface');
insert into todo (id, due, created, importance, completion, description) values (42, '2021-06-29 06:30:03', '2021-08-01 11:37:19', 4, true, 'optimal');
insert into todo (id, due, created, importance, completion, description) values (43, '2021-11-26 08:35:55', '2022-03-20 10:47:37', 1, true, 'Open-architected');
insert into todo (id, due, created, importance, completion, description) values (44, '2022-02-22 05:00:30', '2021-09-22 01:21:19', 2, false, 'solution-oriented');
insert into todo (id, due, created, importance, completion, description) values (45, '2022-02-26 12:18:20', '2021-05-27 16:16:04', 4, true, 'Public-key');
insert into todo (id, due, created, importance, completion, description) values (46, '2021-06-10 18:54:36', '2021-11-08 02:23:07', 3, true, 'Fully-configurable');
insert into todo (id, due, created, importance, completion, description) values (47, '2021-06-10 22:56:42', '2022-01-06 13:36:12', 4, true, 'Centralized');
insert into todo (id, due, created, importance, completion, description) values (48, '2021-07-05 04:10:46', '2021-05-05 05:01:05', 5, false, 'knowledge user');
insert into todo (id, due, created, importance, completion, description) values (49, '2022-05-02 04:38:38', '2021-08-01 01:40:37', 2, false, '6th generation');
insert into todo (id, due, created, importance, completion, description) values (50, '2021-08-25 00:14:25', '2021-05-27 14:04:16', 1, false, 'customer loyalty');
