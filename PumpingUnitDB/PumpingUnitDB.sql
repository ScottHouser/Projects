DROP DATABASE IF EXISTS UnitSQL;
CREATE DATABASE UnitSQL;
USE UnitSQL;

-- Make yer tables
CREATE TABLE `UnitsTable`(
	`trackingNumber` INT NOT NULL AUTO_INCREMENT,
    `make` VARCHAR(50) NOT NULL,
    `model` VARCHAR(50) NOT NULL,
    `size` VARCHAR(50) NOT NULL,
    `serialNumber` VARCHAR(50) NOT NULL,
    `weights` VARCHAR(50) NOT NULL,
    `notes` VARCHAR(50) NOT NULL,
    
    PRIMARY KEY (`id`)
);