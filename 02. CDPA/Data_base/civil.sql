-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 01:10 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `civil`
--

-- --------------------------------------------------------

--
-- Table structure for table `1st`
--

CREATE TABLE `1st` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `1st`
--

INSERT INTO `1st` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Communicative English', 'HS8151', 4),
(2, 'Mathematics I', 'MA8151', 4),
(3, 'Engineering Physics', 'PH8151', 3),
(4, 'Engineering Chemistry', 'CY8151', 3),
(5, 'Prob Solving & Python programming', 'GE8151', 3),
(6, 'Engineering Graphics', 'GE8152 ', 4),
(7, 'Problem Solving& Python Programming Lab', 'GE8161', 2),
(8, 'Physics & Chemistry Lab ', 'BS8161 ', 2);

-- --------------------------------------------------------

--
-- Table structure for table `2nd`
--

CREATE TABLE `2nd` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `2nd`
--

INSERT INTO `2nd` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Technical English', 'HS8251', 4),
(2, 'Mathematics II', 'MA8251', 4),
(3, 'Physics for Civil Engg', 'PH8201', 3),
(4, 'Basic Electrical & Electronic Engg', 'BE8251', 3),
(5, 'Environmental Science & Engineering', 'GE8291', 3),
(6, 'Engineering Mechanics', 'GE8292\r\n\r\n', 3),
(7, 'Engineering Practices Lab', 'GE8261', 2),
(8, 'Computer Aided Building Drawing', 'CE8211', 2);

-- --------------------------------------------------------

--
-- Table structure for table `3rd`
--

CREATE TABLE `3rd` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `3rd`
--

INSERT INTO `3rd` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Transforms & Partial Differential Equations', 'MA8353', 4),
(2, 'Strength of Materials I ', 'CE8301', 3),
(3, 'Fluid Mechanics', 'CE8302', 3),
(4, 'Surveying', 'CE8351', 3),
(5, 'Construction Materials', 'CE8391', 3),
(6, 'Engineering Geology', 'CE8392', 3),
(7, 'Construction Materials Lab', 'CE8311', 2),
(8, 'Surveying Lab', ' CE8361', 2),
(9, 'Interpersonal Skills /Listening and Speaking', 'HS8381', 1);

-- --------------------------------------------------------

--
-- Table structure for table `4th`
--

CREATE TABLE `4th` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `4th`
--

INSERT INTO `4th` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Numerical Methods', 'MA8491', 4),
(2, 'Construction Techniques and Practices', 'CE8401', 3),
(3, 'Strength of Materials II', 'CE8402', 3),
(4, 'Applied Hydraulic Engineering', 'CE8403', 3),
(5, 'Concrete Technology', 'CE8404', 3),
(6, 'Soil Mechanics', 'CE8491', 3),
(7, 'Strength of Materials Lab', 'CE8481', 2),
(8, 'Hydraulic Engineering Lab', 'CE8461', 2),
(9, 'Advanced Reading & Writing', 'HS8461', 1);

-- --------------------------------------------------------

--
-- Table structure for table `5th`
--

CREATE TABLE `5th` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `5th`
--

INSERT INTO `5th` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Design of Reinforced Cement Concrete Elements', 'CE8501', 4),
(2, 'Structural Analysis I', 'CE8502', 3),
(3, 'Water Supply Engineering', 'EN8491', 3),
(4, 'Foundation Engineering', 'CE8591', 3),
(5, 'Professional Elective I', '', 3),
(6, 'Open Elective I ', '-', 3),
(7, 'Soil Mechanics Lab', 'CE8511', 2),
(8, ' Water and Waste Water Analysis Lab', 'CE8512', 2),
(9, 'Survey Camp', 'CE8513', 2);

-- --------------------------------------------------------

--
-- Table structure for table `6th`
--

CREATE TABLE `6th` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `6th`
--

INSERT INTO `6th` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Design of Steel Structural Elements', 'CE8601', 4),
(2, 'Structural Analysis II', 'CE8602', 3),
(3, 'Irrigation Engineering', 'CE8603', 3),
(4, 'HighWay Engineering', 'CE8604', 3),
(5, 'Wastewater Engineering', 'EN8592', 3),
(6, 'Professional Elective II', '', 3),
(7, 'Highway Engineering Lab', 'CE8611', 2),
(8, 'Irrigation & Environmental Engineering Drawing', 'CE8612\r\n', 2),
(9, 'Professional Communication', 'HS8581', 1);

-- --------------------------------------------------------

--
-- Table structure for table `7th`
--

CREATE TABLE `7th` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `7th`
--

INSERT INTO `7th` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Estimation, Costing & Valuation Engineering', 'CE8701', 3),
(2, 'Railways, Airports,Docks & Harbour Engineering', 'CE8702', 3),
(3, 'Structural Design& Drawing', 'CE8703', 4),
(4, 'Professional Elective III', '', 3),
(5, 'Open Elective II', '-', 3),
(6, 'Creative and Innovative Project', 'CE8711', 2),
(7, 'Industrial Training', 'CE8712', 2);

-- --------------------------------------------------------

--
-- Table structure for table `8th`
--

CREATE TABLE `8th` (
  `id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_code` varchar(255) NOT NULL,
  `credits` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `8th`
--

INSERT INTO `8th` (`id`, `sub_name`, `sub_code`, `credits`) VALUES
(1, 'Professional Elective IV', '', 3),
(2, 'Professional Elective V', '-', 3),
(3, 'Project Work', 'CE8811', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `1st`
--
ALTER TABLE `1st`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`),
  ADD UNIQUE KEY `sub_code_2` (`sub_code`),
  ADD UNIQUE KEY `sub_code_3` (`sub_code`);

--
-- Indexes for table `2nd`
--
ALTER TABLE `2nd`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQUE` (`sub_code`);

--
-- Indexes for table `3rd`
--
ALTER TABLE `3rd`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- Indexes for table `4th`
--
ALTER TABLE `4th`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- Indexes for table `5th`
--
ALTER TABLE `5th`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- Indexes for table `6th`
--
ALTER TABLE `6th`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- Indexes for table `7th`
--
ALTER TABLE `7th`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- Indexes for table `8th`
--
ALTER TABLE `8th`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_code` (`sub_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `1st`
--
ALTER TABLE `1st`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `2nd`
--
ALTER TABLE `2nd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `3rd`
--
ALTER TABLE `3rd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `4th`
--
ALTER TABLE `4th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `5th`
--
ALTER TABLE `5th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `6th`
--
ALTER TABLE `6th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `7th`
--
ALTER TABLE `7th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `8th`
--
ALTER TABLE `8th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
