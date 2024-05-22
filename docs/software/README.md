# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних

    -- -----------------------------------------------------
    -- Table `db-theme-3`.`Task`
    -- -----------------------------------------------------
    DROP TABLE IF EXISTS `db-theme-3`.`Task`;

    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Task` (
       `Task.id` INT NOT NULL ,
       `Task.name` VARCHAR(255) NOT NULL,
       `Task.deadline` DATETIME NOT NULL,
       PRIMARY KEY (`Task.id`))
     ENGINE = InnoDB;

    -- -----------------------------------------------------
    -- Data for table `db-theme-3`.`Task`
    -- -----------------------------------------------------
    START TRANSACTION;
    USE `db-theme-3`;
    INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`) VALUES (1, 'Task1', '2024-3-26');
    INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`) VALUES (2, 'Task2', '2024-4-26');
    INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`) VALUES (3, 'Task3', '2024-5-26');
    
    COMMIT;
  
- RESTfull сервіс для управління даними

