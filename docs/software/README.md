# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
``` SQL
-- -----------------------------------------------------
-- Table `db-theme-3`.`userMessage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`userMessage` ;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`userMessage` (
  `userMessage.id` INT NOT NULL,
  `userMessage.text` VARCHAR(250) NOT NULL,
  `userMessage.time` DATETIME NOT NULL,
  PRIMARY KEY (`userMessage.id`))
ENGINE = InnoDB;


START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`userMessage` (`id`, `text`, `time`) VALUES (1, 'Question 1', '2024-04-19 12:34:56');
INSERT INTO `db-theme-3`.`userMessage` (`id`, `text`, `time`) VALUES (2, 'Question 2', '2024-05-19 21:43:11');
INSERT INTO `db-theme-3`.`userMessage` (`id`, `text`, `time`) VALUES (3, 'Question 3', '2024-05-19 16:05:25');

COMMIT;
```
- RESTfull сервіс для управління даними

