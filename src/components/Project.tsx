import React from "react";
import crime from '../assets/images/crime.png';
import med1 from '../assets/images/med1.png';
import med from '../assets/images/med.png';
import brain from '../assets/images/brain.png';
import hand from '../assets/images/hand.png';
import deaf from '../assets/images/deaf.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/magicianrom/Crime_Data_Analysis" target="_blank" rel="noreferrer"><img src={crime} className="zoom" alt="thumbnail" width="90%"/></a>
                <a href="https://github.com/magicianrom/Crime_Data_Analysis" target="_blank" rel="noreferrer"><h2>Crime Data Analysis</h2></a>
                <p>Analyzed Los Angeles crime data using Python, Pandas, and Matplotlib to identify crime patterns, trends, and locations relevant to tourism safety. My analysis focused on identifying when and where crimes were occuring the most frequently and which types of crimes were occuring less. These findings could help to provide a clearer understanding of crime patterns from a tourism perspective as it requires careful planning for the saftey of the tourist</p>
            </div>
            <div className="project">
                <a href="https://github.com/magicianrom/Medical_Tracker_Application" target="_blank" rel="noreferrer"><img src={med1} className="zoom" alt="thumbnail" width="60%"/></a>
                <a href="https://github.com/magicianrom/Medical_Tracker_Application" target="_blank" rel="noreferrer"><h2>Medical Tracker Application</h2></a>
                <p>A lightweight, Python-based health management application that allows users to seamlessly store, retrieve, and track daily medications alongside personal health logs. The application utilizes local .csv files for persistent data management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/magicianrom/brain_tumor_CNN" target="_blank" rel="noreferrer"><img src={brain} className="zoom" alt="thumbnail" width="80%"/></a>
                <a href="https://github.com/magicianrom/brain_tumor_CNN" target="_blank" rel="noreferrer"><h2>Brain Tumor Classification Using Deep Learning with a Web-Based Interface</h2></a>
                <p>Developed a deep learning model to classify brain tumors from MRI images into four categories (glioma, meningioma, pituitary, and no tumor). Using transfer learning on 7,000+ MRI scans, achieving 99.0% accuracy with ResNet50
                    .</p>
            </div>
            <div className="project">
                <a href="https://github.com/magicianrom/sign_language_CNN" target="_blank" rel="noreferrer"><img src={hand} className="zoom" alt="thumbnail" width="75%"/></a>
                <a href="https://github.com/magicianrom/sign_language_CNN" target="_blank" rel="noreferrer"><h2>(0-9) American Sign Language Classification</h2></a>
                <p> Comparing two convolutional neural network (CNN) models for classifying sign language hand images representing digits from 0 to 9. The results show a clear improvement in performance when using the advanced model. The baseline CNN achieved a test accuracy of 77%, whereas the advanced model achieved a significantly higher test accuracy of 95.47%.</p>
            </div>
            <div className="project">
                <a href="https://github.com/magicianrom/Deaf-People-Notification-System-DANS-" target="_blank" rel="noreferrer"><img src={deaf} className="zoom" alt="thumbnail" width="85%"/></a>
                <a href="https://github.com/magicianrom/Deaf-People-Notification-System-DANS-" target="_blank" rel="noreferrer"><h2>Deaf People Alert Notification System (DANS)</h2></a>
                <p>The purpose is to help increase the safety of deaf drivers through designing a wearable which can notify deaf people of nearby sounds. Deaf drivers are unable to hear nearby vehicles or their honking sounds in case of an incident or emergencies.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;