DELIMITER //
CREATE TRIGGER `stamp_id` BEFORE INSERT ON `stamp`
 FOR EACH ROW begin
 SET new.id = uuid();
end//
DELIMITER ;