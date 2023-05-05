-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 01:18 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bt`
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
(3, 'Physics of Materials ', 'PH8254', 3),
(4, 'Basic Civil & Mech Engineering ', 'BE8252', 4),
(5, 'Microbiology', 'BT8291', 3),
(6, 'Biochemistry', 'BT8251', 3),
(7, 'Engineering Practices Lab', 'GE8261', 2),
(8, 'Biochemistry Lab', 'BT8261', 2);

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
(1, 'Transforms and Partial Differential Equations ', 'MA8353', 4),
(2, 'Stoichiometry ', 'BT8301', 4),
(3, 'Applied Thermodynamics for Biotechnologists ', 'BT8302', 3),
(4, 'Basic Industrial Biotechnology ', 'BT8303', 3),
(5, 'Bioorganic Chemistry', 'BT8304', 3),
(6, 'Cell Biology', 'BT8305', 3),
(7, 'Microbiology Lab ', 'BT8361', 2),
(8, 'Cell Biology Lab', 'BT8311', 2),
(9, 'Interpersonal Skills/Listening and Speaking ', 'HS8381', 2);

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
(1, 'Probability Statistics ', 'MA8391', 4),
(2, 'Fluid Mechanics and Heat Transfer Operations', 'BT8401', 4),
(3, 'Molecular Biology', 'BT8402', 3),
(4, 'Enzyme Technology and Biotransformations', 'BT8403', 3),
(5, 'Bioprocess Principles ', 'BT8404', 3),
(6, 'Environmental Science and Engineering', 'GE8291', 3),
(7, 'Chemical Engineering Lab ', 'BT8411', 2),
(8, 'Molecular Biology Lab', 'BT8412', 2),
(9, 'Advanced Reading & Writing', 'HS8461', 2);

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
(1, 'Mass Transfer Operations', 'BT8501', 3),
(2, 'Bioprocess Engineering ', 'BT8591', 3),
(3, 'Analytical Methods and Instrumentation', '', 3),
(4, 'Protein Engineering', 'BT8503', 3),
(5, 'Professional Elective I ', '-', 3),
(6, 'Open Elective I', '--', 3),
(7, 'Bio process Lab ', 'BT8511', 2),
(8, 'Analytical Methods and Instrumentation Lab', 'BT8512', 2),
(9, 'Professional Communication', 'HS8581', 1);

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
(1, 'Bioinformatics', 'BT8651', 4),
(2, 'Genetic Engineering ', 'BT8601', 4),
(3, 'Applied Chemical Reaction Engineering ', 'BT8691', 3),
(4, 'Professional Elective II ', '', 3),
(5, 'Professional Elective IV', '--', 3),
(6, 'Genetic Engineering LAb', 'BT8612', 2),
(7, 'Bioprocess LabII', 'BT8611', 2);

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
(1, 'Total Quality Management ', 'GE8077', 3),
(2, 'Downstream processing', 'BT8751', 3),
(3, 'Immunology ', 'BT8791', 3),
(4, 'Professional Elective V ', '', 0),
(5, 'Professional Elective VI', '-', 3),
(6, 'Open Elective II', '--', 3),
(7, 'Downstream Processing Lab ', 'BT8711', 2),
(8, 'Immunology Lab', 'BT8712', 2);

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
(1, 'Project Work', 'BT8811', 10);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `6th`
--
ALTER TABLE `6th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `7th`
--
ALTER TABLE `7th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `8th`
--
ALTER TABLE `8th`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
