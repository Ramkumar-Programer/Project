-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 01:13 PM
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
-- Database: `eee`
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
(2, 'Physics for Electronics Engineering ', 'PH8253', 3),
(3, 'Mathematics II ', 'MA8251', 4),
(4, 'Basic Civil & Mechanical Engineering', 'BE8252', 4),
(5, 'Environmental Science & Engineering ', 'GE8291', 3),
(6, 'Circuit Theory', 'EE8251', 3),
(7, 'Engineering Practices Lab', 'GE8261', 2),
(8, 'Electric Circuits Lab', 'EE8261', 2);

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
(1, 'Transforms & Partial Differential Equations ', 'MA8351', 4),
(2, 'Digital Logic Circuits', 'EE8351', 3),
(3, 'Electromagnetic Theory', 'EE8391', 3),
(4, 'Electrical Machines - I', 'EE8301', 3),
(5, 'Electronic Devices & Circuits ', 'EC8353', 3),
(6, 'Power Plan Enginnering', 'ME8792', 3),
(7, 'Electronics Lab ', 'aaaa', 0),
(8, 'Electrical Machines Lab-I', 'bbbb', 2);

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
(2, 'Electrical Machines I', 'EE8401', 3),
(3, 'Transmission & Distribution ', 'EE8402', 3),
(4, 'Measurements and Instrumentation', 'EE8403', 3),
(5, 'Linear Integrated Circuits & Applications', 'EE8451', 3),
(6, 'Control Systems', 'IC8451', 4),
(7, 'Electrical Machines Lab-II ', 'EE8411', 2),
(8, 'Linear & Digital Integrated Circuits Lab ', 'EE8461', 2),
(9, 'Technical Seminar', 'EE8412', 1);

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
(1, 'Power System Analysis', 'EE8501', 3),
(2, 'Microprocessors & Microcontrollers ', 'EE8551', 3),
(3, 'Power Engineering ', 'EE8552', 3),
(4, 'Digital Signal Processing', 'CS8392', 3),
(5, 'Object Oriented Programming', '', 3),
(6, 'Open Elective I ', '-', 3),
(7, 'Control & Instrumentation Lab', 'EE8511', 2),
(8, 'Professional Communication', 'HS8581', 1),
(9, 'Object Oriented Programming Lab', 'CS8383', 2);

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
(1, 'Solid State Drives', 'EE8601', 3),
(2, 'Protection and Switchgear', 'EE8602', 3),
(3, 'Embedded Systems', 'EE8691', 3),
(4, 'Professional Elective I', '', 3),
(5, 'Professional Elective II', '-', 3),
(6, 'Power Electronics and Drives Lab', 'EE8661', 2),
(7, 'Microproce & Micro controller Lab', 'EE8681', 2),
(8, 'Mini Project ', 'EE8611', 2);

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
(1, 'High Voltage Engineering', 'EE8701', 3),
(2, 'Power System Operation and Control', 'EE8702', 3),
(3, 'Renewable Energy Systems', 'EE8703', 3),
(4, 'Open Elective II', '', 3),
(5, 'Professional Elective III', '-', 3),
(6, 'Professional Elective IV ', '--', 3),
(7, 'Power System Simulation Lab', 'EE8711', 2),
(8, 'Renewable Energy Systems Lab', 'EE8712', 2);

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
(1, 'Professional Elective V ', '', 3),
(2, 'Professional Elective V', '-', 3),
(3, 'Project Work ', 'EE8811', 10);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `7th`
--
ALTER TABLE `7th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `8th`
--
ALTER TABLE `8th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
