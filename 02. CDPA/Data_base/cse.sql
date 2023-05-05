-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 01:11 PM
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
-- Database: `cse`
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
(3, 'Physics for Information Science ', ' PH8252', 3),
(4, 'Basic Electrical & Measurement Engineering', 'BE8255', 3),
(5, 'Environmental Science & Engineering ', 'GE8291', 3),
(6, ' Programming in C', 'CS8251', 3),
(7, 'C Programming lab', 'CS8261', 2),
(8, 'Engineering Practices Lab', 'GE8261', 2);

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
(1, 'Discrete Mathematics', 'MA8351', 4),
(2, 'Digital Principles & System Design', 'CS8351', 4),
(3, 'Data Structures', 'CS8391', 3),
(4, 'Object Oriented Programming', 'CS8392', 3),
(5, 'Communication Engineering', 'EC8395', 3),
(6, 'Data Structures Lab', 'CS8381', 2),
(7, 'Object Oriented programming Lab', 'CS8383', 2),
(8, 'Digital Systems Lab', 'CS8382', 2),
(9, 'Interpersonal Skills Listening &Speaking', 'HS8381', 1);

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
(1, 'Probability & Queueing Theory', 'MA8402', 4),
(2, 'Computer Architecture', 'CS8491', 3),
(3, 'Database Management Systems ', 'CS8492', 3),
(4, 'Design and Analysis of Algorithms', 'CS8451', 3),
(5, 'Operating Systems', 'CS8493', 3),
(6, 'Software Engineering', 'CS8494', 3),
(7, 'Operating Systems Lab', 'CS8461', 2),
(8, 'Database Management Systems Lab', 'CS8481', 2),
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
(1, 'Algebra & Number theory ', 'MA8551', 4),
(2, 'Computer Networks', 'CS8591', 3),
(3, 'Microprocessors and Microcontrollers', 'EC8691', 3),
(4, 'Theory of Computation', 'CS8501', 3),
(5, 'Object Oriented Analysis & Design', 'CS8592', 3),
(6, 'Open Elective I', '', 3),
(7, 'Microprocessors and Microcontrollers Lab', 'EC8681', 2),
(8, 'Object Oriented Analysis & Design Lab ', 'CS8582', 2),
(9, 'Networks Lab', 'CS8581', 2);

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
(1, 'Internet Programming', 'CS8651', 3),
(2, 'Artificial Intelligence', 'CS8691', 3),
(3, ' Mobile Computing', 'CS8601', 3),
(4, 'Compiler Design ', 'CS8602', 4),
(5, 'Distributed Systems', 'CS8603', 3),
(6, 'Professional Elective I', '', 3),
(7, 'Internet Programming Lab', 'CS8661', 2),
(8, 'Mobile Application Development Lab', 'CS8662', 2),
(9, 'Mini Project ', 'CS8611', 1),
(10, 'Professional Communication', 'HS8581', 1);

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
(1, 'Principles of Management', 'MG8591', 3),
(2, 'Cryptography & Network Security', 'CS8792', 3),
(3, 'Cloud Computing', 'CS8791', 3),
(4, 'Open Elective II', '', 3),
(5, 'Professional Elective II', '-', 3),
(6, 'Professional Elective III', '--', 3),
(7, ' Cloud Computing Lab', 'CS8711', 2),
(8, 'Security Lab', 'IT8761', 2);

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
(3, 'Project Work', ' CS8811', 10);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
