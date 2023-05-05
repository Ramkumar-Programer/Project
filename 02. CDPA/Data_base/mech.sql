-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 01:14 PM
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
-- Database: `mech`
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
(2, 'Mathematics II ', 'MA8251', 4),
(3, 'Materials Science ', 'PH8251', 3),
(4, 'Basic Electri, Electronics & Instr Engg', 'BE8253', 3),
(5, 'Environmental Science & Engineering', 'GE8291', 3),
(6, 'Engineering Mechanics', 'GE8292\r\n\r\n', 4),
(7, 'Basic Electri, Electronics & Instr Engg Lab', 'BE8261\r\n\r\n', 2),
(8, 'Engineering Practices Lab', 'GE8261\r\n\r\n', 2);

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
(1, 'Transforms and Partial Differential Equations', 'MA8353', 4),
(2, 'Engineering Thermodynamics', 'ME8391\r\n\r\n', 4),
(3, 'Fluid Mechanics and Machinery', 'CE8394\r\n\r\n', 4),
(4, 'Manufacturing Technology I ', 'ME8351', 3),
(5, 'Electrical Drives and Controls', 'EE8353', 3),
(6, 'Manufacturing Technology Lab', 'ME8361', 2),
(7, 'Computer Aided Machine Drawing', 'ME8381', 2),
(8, 'Electrical Engineering Lab', 'EE8361', 2),
(9, 'Interpersonal Skills / Listening & Speaking', 'HS8381', 1);

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
(1, 'Statistics and Numerical Methods ', 'MA8452', 4),
(2, 'Kinematics of Machinery', 'ME8492', 3),
(3, 'Manufacturing Technology II', 'ME8451', 3),
(4, 'Engineering Metallurgy ', 'ME8491', 3),
(5, 'Strength of Materials for Mechanical Engineers', 'CE8395\r\n\r\n', 3),
(6, 'Thermal Engineering- I', 'ME8493', 3),
(7, 'Manufacturing Technology Lab II', 'ME8462', 2),
(8, 'Strength of Materials & fluid MM Lab', 'CE8381', 2),
(9, 'Advanced Reading and Writing', 'HS8461', 1);

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
(1, 'Thermal Engineering- II', 'ME8595', 3),
(2, 'Design of Machine Elements', 'ME8593', 3),
(3, 'Metrology and Measurements', 'ME8511', 3),
(4, 'Dynamics of Machines', 'ME8594', 4),
(5, 'Open Elective I', '', 3),
(6, 'Kinematics and Dynamics Lab', '-', 2),
(7, 'Thermal Engineering Lab', 'ME8512', 2),
(8, 'Metrology and Measurements Lab', 'ME8513', 2);

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
(1, 'Professional Communication', 'HS8581', 1),
(2, 'Design of Transmission Systems', 'ME8651', 3),
(3, 'Computer Aided Design & Manufacturing ', 'ME8691', 3),
(4, 'Heat and Mass Transfer', 'ME8693', 4),
(5, 'Finite Element Analysis', 'ME8692', 3),
(6, 'Hydraulics and Pneumatics ', 'ME8694', 3),
(7, 'Professional Elective I', '', 3),
(8, 'CAD CAM LAb', 'ME8681\r\n', 2),
(9, 'Design & Fabrication Project', ' ME8682', 2);

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
(1, 'Power Plant Engineering', 'ME8792', 3),
(2, 'Process Planning and Cost Estimation ', 'ME8793', 3),
(3, 'Mechatronics', 'ME8791', 3),
(4, 'Open Elective - II', '', 3),
(5, 'Professional Elective II', '-', 3),
(6, 'Professional Elective III', '--', 3),
(7, 'Simulation & Analysis LAb', 'ME8711', 2),
(8, 'Mechatronics Lab', 'ME8781', 2),
(9, 'Technical Seminar', 'ME8712', 1);

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
(1, 'Professional Elective– IV ', '', 3),
(2, 'Principles of Management', 'MG8591', 3),
(3, 'Project Work', '--', 10);

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
  ADD UNIQUE KEY `sub_code` (`sub_code`),
  ADD UNIQUE KEY `sub_code_2` (`sub_code`),
  ADD UNIQUE KEY `sub_code_3` (`sub_code`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `6th`
--
ALTER TABLE `6th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `7th`
--
ALTER TABLE `7th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `8th`
--
ALTER TABLE `8th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
