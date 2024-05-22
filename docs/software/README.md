# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних

    DROP TABLE IF EXISTS `db-theme-3`.`Request` ;
    
    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Request` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `time` TIME NULL,
      `description` VARCHAR(45) NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_Request_History1_idx` (`History_History.id` ASC) VISIBLE,
      INDEX `fk_Request_Client1_idx` (`Client.id` ASC) VISIBLE,
      CONSTRAINT `fk_Request_History1`
        FOREIGN KEY (`History.id`)
        REFERENCES `db-theme-3`.`History` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_Request_Client1`
        FOREIGN KEY (`Client.id`)
        REFERENCES `db-theme-3`.`Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;
    ENGINE = InnoDB;


    DROP TABLE IF EXISTS `db-theme-3`.`Client` ;
    
    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Client` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `lastname` VARCHAR(45) NULL,
      `mail` VARCHAR(45) NULL,
      `password` VARCHAR(45) NULL,
       UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE)
      PRIMARY KEY (`id`),
      INDEX `fk_Client_Role1_idx` (`Role.id` ASC) VISIBLE,
      CONSTRAINT `fk_Client_Role1`
        FOREIGN KEY (`Role.id`)
        REFERENCES `db-theme-3`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    ENGINE = InnoDB;


    DROP TABLE IF EXISTS `db-theme-3`.`Role` ;
    
    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Role` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `permission` VARCHAR(45) NULL,
      `description` VARCHAR(45) NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;


   START TRANSACTION;
    USE `db-theme-3`;
    INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History.id`, `Client.id`) VALUES (1, 'Swc', '11:30', 'SwERVREVREc', 1, 1);
    INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History.id`, `Client.id`) VALUES (2, 'Wdcw', '22:00', 'SwFDVFVc', 2, 2);
    INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History.id`, `Client.id`) VALUES (3, 'Ccec', 'Y13:00', 'SwEVSGMUIc', 3, 3);
    
    COMMIT;

   START TRANSACTION;
    USE `db-theme-3`;
    INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (1, 'Swc', 'frc', 'Swc@gmail.com', '123', 1);
    INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (2, 'fewc', 'Swc', 'fewc@gmail.com', '321', 2);
    INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (3, 'Gdwc', 'oirwc','Gdwc@gmail.com', '123456', 3);

    COMMIT;

  START TRANSACTION;
    USE `db-theme-3`;
    INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (1, 'Swc', 'frc', 'bhvruoeijrnwp');
    INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (2, 'fewc', 'Swc', 'njnjevjnvenijveni');
    INSERT INTO `db-theme-3 `.`Role` (`id`, `name`, `permission`, `description`) VALUES (3, 'Gdwc', 'oirwc', 'fvvkfnjewojcw');

    COMMIT;

- RESTfull сервіс для управління даними

