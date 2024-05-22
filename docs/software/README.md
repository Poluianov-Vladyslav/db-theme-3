# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними
``` SQL
-- -----------------------------------------------------
-- Table `db-theme-3`.`adminAnswer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`adminAnswer` ;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`adminAnswer` (
  `adminAnswer.id` SERIAL NOT NULL,
  `adminAnswer.text` VARCHAR(250) NOT NULL,
  `adminAnswer.time` DATETIME NOT NULL,
  PRIMARY KEY (`adminAnswer.id`))
ENGINE = InnoDB;


START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`) VALUES (1, 'Answer1', '2024-03-21');
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`) VALUES (2, 'Answer2', '2024-04-19');
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`) VALUES (3, 'Answer3', '2024-05-10');

COMMIT;
```
