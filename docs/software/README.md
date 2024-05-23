CREATE TABLE IF NOT EXISTS `db-theme-3`.`SupportRequest` (
    `SupportRequest.id` INT NOT NULL PRIMARY KEY,
    `SupportRequest.isAnswered` BOOLEAN NOT NULL,
    `TasSupportRequestk.type` VARCHAR(45) NOT NULL,
    INDEX `fk_SupportRequest_userMessage_idx` (`userMessage_userMessage.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_userMessage_idx`
        FOREIGN KEY (`userMessage_userMessage.id`)
        REFERENCES `db-theme-3`.`userMessage` (`userMessage.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    INDEX `fk_SupportRequest_adminAnswer_idx` (`adminAnswer_adminAnswer.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_adminAnswer_idx`
        FOREIGN KEY (`adminAnswer_adminAnswer.id`)
        REFERENCES `db-theme-3`.`adminAnswer` (`adminAnswer.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    INDEX `fk_SupportRequest_Client_idx` (`Client_Client.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_Client_idx`
        FOREIGN KEY (`Client_Client.id`)
        REFERENCES `db-theme-3`.`Client` (`Client.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);
