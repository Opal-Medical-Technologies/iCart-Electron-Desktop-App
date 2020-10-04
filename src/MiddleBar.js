import React from 'react';
import "./MiddleBar.css";



function MedicationTitle() {
    return(
        <div className = "MedicationTitle">
            Adenosine (IV)
        </div>
    )
}

function FolderPath() {
    return(
        <div className = "FolderPath">
            ACTIVE/MEDICATIONS
        </div>
    )
}

function Divider() {
    return(
        <div className = "Divider">
        </div>
    )
}

function UnitsTitle() {
    return(
        <div className = "UnitsTitle">
            Units:
        </div>
    )
}

function ConcentrationTitle() {
    return(
        <div className = "ConcentrationTitle">
            Concentration:
        </div>
    )
}

function DosageConfigurationTitle() {
    return(
        <div className = "DosageConfigurationTitle">
            Dosage Configuration:
        </div>
    )
}

function ConstraintsTitle() {
    return(
        <div className = "ConstraintsTitle">
            CONSTRAINTS
        </div>
    )
}

function Background() {
    return(
        <div className = "Background">
        </div>
    )
}

export function MiddleBar() {
    return(
        <div className = "MiddleBar">
            <MedicationTitle />
            <FolderPath />
            <Divider />
            <UnitsTitle />
            <Background />
            <ConcentrationTitle />
            <DosageConfigurationTitle />
            <ConstraintsTitle />
        </div>
    )
}