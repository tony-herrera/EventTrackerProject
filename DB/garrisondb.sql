-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema garrisondb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `garrisondb` ;

-- -----------------------------------------------------
-- Schema garrisondb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `garrisondb` DEFAULT CHARACTER SET utf8 ;
USE `garrisondb` ;

-- -----------------------------------------------------
-- Table `veteran`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `veteran` ;

CREATE TABLE IF NOT EXISTS `veteran` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `branch` VARCHAR(40) NOT NULL COMMENT '‘ARMY’, ‘NAVY’, ‘AIRFORCE’, ‘MARINES’, ‘COASTGUARD’, ',
  `eaos` VARCHAR(25) NOT NULL,
  `assign_recruiter` VARCHAR(15) NULL,
  `duty_station` VARCHAR(70) NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NULL,
  `career_interest` VARCHAR(100) NULL,
  `dod_skill_bridge` VARCHAR(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS garrison@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'garrison'@'localhost' IDENTIFIED BY 'garrison';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'garrison'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `veteran`
-- -----------------------------------------------------
START TRANSACTION;
USE `garrisondb`;
INSERT INTO `veteran` (`id`, `first_name`, `last_name`, `branch`, `eaos`, `assign_recruiter`, `duty_station`, `email`, `phone_number`, `career_interest`, `dod_skill_bridge`) VALUES (1, 'Tony', 'Herrera', 'Navy', 'June 6 2020', 'yes', 'Camp Pendleton', 'tony.herrera@gmail.com', '7733293933', 'Java Developer', 'yes');
INSERT INTO `veteran` (`id`, `first_name`, `last_name`, `branch`, `eaos`, `assign_recruiter`, `duty_station`, `email`, `phone_number`, `career_interest`, `dod_skill_bridge`) VALUES (2, 'John', 'Johnson', 'Marine', 'June 6 2020', 'no', 'Camp Pendleton', 'John@hotmail.com', '1234567445', NULL, NULL);
INSERT INTO `veteran` (`id`, `first_name`, `last_name`, `branch`, `eaos`, `assign_recruiter`, `duty_station`, `email`, `phone_number`, `career_interest`, `dod_skill_bridge`) VALUES (3, 'Ray', 'Michaels', 'Army', 'June 6 2020', 'yes', 'Miramar', 'hello@yahoo.com', '2345678444', NULL, NULL);
INSERT INTO `veteran` (`id`, `first_name`, `last_name`, `branch`, `eaos`, `assign_recruiter`, `duty_station`, `email`, `phone_number`, `career_interest`, `dod_skill_bridge`) VALUES (4, 'Bernard', 'Santiago', 'Airforce', 'June 6 2020', 'no', 'Ft. Bragg', 'flyhigh@gmail.com', '777444333', NULL, NULL);
INSERT INTO `veteran` (`id`, `first_name`, `last_name`, `branch`, `eaos`, `assign_recruiter`, `duty_station`, `email`, `phone_number`, `career_interest`, `dod_skill_bridge`) VALUES (5, 'Lawrence', 'Hobbs', 'Coast Guard', 'June 6 2020', 'yes', 'NASCC', 'seawater@water.com', '999444333', NULL, NULL);

COMMIT;

