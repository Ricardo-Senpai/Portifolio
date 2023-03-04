set sql_safe_updates =0;

drop database if exists Sa;

create database Sa;

use Sa;

create table USER (
	IDUSER int not null,
    EMAIL_USER varchar(45),
    PASSWORD_USER varchar(45),
    LOGIN_USER varchar(45),
    primary key(IDUSER)
);

create table PATIENT(
    IDPATIENT int not null,
    IDUSER int not null,
    CPF char(11) not null,
    PASSWORD varchar(50) not null,
    RG char(7) not null,
    FULL_NAME varchar(120) not null,
    HEIGHT varchar(3) not null,
    WEIGHT int not null,
    PHONE varchar(12) not null,
    EMERGENCY_CONTACT varchar(12) not null,
    BIRTH_DATE date not null,
    CEP char(8) not null,
    RESIDENCY_NUMBER varchar(6) not null,
    ADICIONAL_INFO varchar(100) not null,
    COUNTRY varchar(50) not null,
    STATE char(2) not null,
    CITY varchar(150) not null,
    CAN_RECEIVE_BLOOD char(1) not null,
    BLOOD_TYPE varchar(3) not null,
    ORGAN_DONOR char(1) not null,
    SMOKER char(1) not null,
    HEALTH_INSURENCE_NAME varchar(500),
    REGISTRY_NUMBER varchar(50),
    EXPIRATION_DATE date,
    primary key (IDPATIENT),
    foreign key(IDUSER) references USER(IDUSER)
);

create table MEDIC (
	IDMEDIC int not null,
    CPF char(11) not null,
    CRM int not null,
    MEDIC_PASSOWRD varchar(45),
    MEDIC_LOGIN varchar(45),
    primary key(IDMEDIC)
);

create table EXAM(
	IDEXAM int not null,
    IDMEDIC int not null,
    IDPATIENT int not null,
	EXAM_DATE date,
    DESCRIPTION varchar(45),
    primary key(IDEXAM),
    foreign key(IDMEDIC) references MEDIC(IDMEDIC),
    foreign key(IDPATIENT) references PATIENT(IDPATIENT)
);

create table ALLERGY(
	IDALLERGY INT NOT NULL,
    NAME_ALLERGY VARCHAR(250),
    PRIMARY KEY(IDALLERGY)
);

create table HAS_ALLERGY(
	IDPATIENT INT NOT NULL,
	IDALLERGY INT NOT NULL,
	PRIMARY KEY (IDPATIENT, IDALLERGY),
	FOREIGN KEY (IDPATIENT) REFERENCES PATIENT (IDPATIENT),
	FOREIGN KEY (IDALLERGY) REFERENCES ALLERGY (IDALLERGY)
);

create table CHRONIC_DISEASE(
	IDCHRONIC_DISEASE INT NOT NULL,
    NAME_CHRONIC_DISEASE VARCHAR(250),
    PRIMARY KEY (IDCHRONIC_DISEASE)
);

create table HAS_CHRONIC_DISEASE(
	IDPATIENT INT NOT NULL,
	IDCHRONIC_DISEASE INT NOT NULL,
	PRIMARY KEY (IDPATIENT, IDCHRONIC_DISEASE),
	FOREIGN KEY (IDPATIENT) REFERENCES PATIENT (IDPATIENT),
	FOREIGN KEY (IDCHRONIC_DISEASE) REFERENCES CHRONIC_DISEASE (IDCHRONIC_DISEASE)
);

create table CIRURGY(
	IDCIRURGY INT NOT NULL,
    NAME_CIRURGY VARCHAR(250),
    PRIMARY KEY (IDCIRURGY)
);

create table HAD_CIRURGY(
	IDPATIENT INT NOT NULL,
	IDCIRURGY INT NOT NULL,
	PRIMARY KEY (IDPATIENT, IDCIRURGY),
	FOREIGN KEY (IDPATIENT) REFERENCES PATIENT (IDPATIENT),
	FOREIGN KEY (IDCIRURGY) REFERENCES CIRURGY(IDCIRURGY)
);

create table DISABILITY(
	IDDISABILITY INT NOT NULL,
    NAME_DIABILITY VARCHAR(250),
    PRIMARY KEY (IDDISABILITY)
);

create table HAS_DISABILITY(
	IDPATIENT INT NOT NULL,
	IDDISABILITY INT NOT NULL,
	PRIMARY KEY (IDPATIENT, IDDISABILITY),
	FOREIGN KEY (IDPATIENT) REFERENCES PATIENT (IDPATIENT),
	FOREIGN KEY (IDDISABILITY) REFERENCES DISABILITY(IDDISABILITY)
);