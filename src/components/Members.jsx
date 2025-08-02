import React from 'react';
import { Card } from './ui/Card';
import { CardContent } from './ui/Card';

import HarshVardhan from '../assets/harshVardhan.jpg';
import saumya from '../assets/saumyaTiwari.jpg';
import priyanshu from '../assets/priyanshuGupta.jpg';
import shubham from '../assets/shubham.jpg';
import arvind from '../assets/arvind.jpg';
import pramod from '../assets/pramod.jpg';
import akshay from '../assets/akshay.jpg';
import vikas from '../assets/vikas2.jpg';
import ronak from '../assets/ronak.jpg';
import pankaj from '../assets/pankaj.jpg';
import parth from '../assets/parth.jpg';
import mohan from '../assets/mohan.jpg';
import suyash from '../assets/suyash.jpg';
import khusboo from '../assets/khusboo.jpg';
import anmol from '../assets/anmol.jpg';
import harsh from '../assets/harsh.jpg';
import deepanshu from '../assets/deepanshu.jpg';
import ashmit from '../assets/ashmit.jpg';
import priyanshuP from '../assets/priyanshuP.jpg';
import shivanshu from '../assets/shivanshu.jpg';
import mukul from '../assets/Mukul.jpg';
import darsh from '../assets/darsh.jpg';
import hardik from '../assets/hardik.jpg';
import anik from '../assets/anik.jpg';
import gaurav from '../assets/gaurav.jpg';
import sanchit from '../assets/sanchit.jpg';
import adityaJ from '../assets/adityaJ.jpg';
import aman from '../assets/amanJ.jpg';
import shubhojeet from '../assets/shubhojeet.jpg';
import tanishq from '../assets/tanishq.jpg';
import daksh from '../assets/daksh.jpg';
import anuj from '../assets/anuj.jpg';
import adish from '../assets/adish.jpg';
import sonal from '../assets/sonal.jpg';



const Members = () => {
    const faculty = [
        { name: "Sonal Chandel", logo: sonal, description:"Faculty Incharge",email:"sonalchandel@iiitbhopal.ac.in" }
    ];
    const foundingMember = [
        { name: "Saumya Tiwari", logo: saumya, description:"Co-Founder"},
        { name: "Harshvardhan Singh Chauhan", logo: HarshVardhan, description: "Founder" },
        { name: "Priyanshu Gupta", logo: priyanshu, description:"Co-Founder" },
    ];

    const Members = [
        { name: "Shubham Singh", logo: shubham },
        { name: "Arvind Yadav", logo: arvind },
        { name: "Pramod Tejra", logo: pramod },
        { name: "Akshay Patidar", logo: akshay },
        { name: "Vikas Kaushik", logo: vikas },
        { name: "Ronak Nayak", logo: ronak },
        { name: "Pankaj Gupta", logo: pankaj },
        { name: "Parth Khillare", logo: parth },
        { name: "Mohan Kashyap", logo: mohan },
        { name: "Suyash Nagar", logo: suyash },
        { name: "Khusbu Jamliya", logo: khusboo },
        { name: "Anmol Rajpoot", logo: anmol },
        { name: "Anuj Verma", logo: anuj },
        { name: "Harsh Goyal", logo: harsh },
        { name: "Deepanshu Rajput", logo: deepanshu },
        { name: "Ashmit Rajput", logo: ashmit },
        { name: "Adish Jain", logo: adish },
        { name: "Priyanshu Pandey", logo: priyanshuP },
        { name: "Shivanshu Mishra", logo: shivanshu },
        { name: "Mukul Bhardwaj", logo: mukul },
        { name: "Darsh Dave", logo: darsh },
        { name: "Hardik Agrawal", logo: hardik },
        { name: "Anik Aryan", logo: anik },
        { name: "Gaurav Yadav", logo: gaurav },
        { name: "Sanchit Mishra", logo: sanchit },
        { name: "Aaditya Gupta", logo: adityaJ },
        { name: "Aman Sharma", logo: aman },
        { name: "Shubhojeet Roy", logo: shubhojeet },
        { name: "Tanishq Yadav", logo: tanishq },
        { name: "Shubhi Narwaria", logo: "" },
        { name: "Daksh Rawat", logo: daksh },
    ];

    return (
        <div className="bg-black py-10 px-4 ">
            {/* faculty-section */}
            <div className="flex justify-center mb-8">
                {faculty.map((member, index) => (
                    <Card
                        key={index}
                        className="w-full max-w-sm bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-right flex flex-col items-center justify-between"
                        style={{ animationDelay: `${index * 0.1}s`, height: '100%' }}
                    >
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                                <img
                                    src={member.logo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                            <h4 className="text-base text-muted-foreground">({member.description})</h4>
                            <h5 className="text-base text-muted-foreground">({member.email})</h5>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* founding member section */}
            <div className="flex justify-center mb-8">
                {foundingMember.map((member, index) => (
                    <Card
                        key={index}
                        className="w-full max-w-sm bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-right flex flex-col items-center justify-between mx-auto"
                        style={{ animationDelay: `${index * 0.1}s`, height: '100%' }}
                    >
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                                <img
                                    src={member.logo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                            <h6 className="text-base text-muted-foreground">({member.description})</h6>
                        </CardContent>
                    </Card>
                ))}
            </div>


            {/* Active Member Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Members.map((member, index) => (
                    <Card
                        key={index}
                        className="bg-card-gradient border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-in-right flex flex-col items-center justify-between"
                        style={{ animationDelay: `${index * 0.1}s`, height: '100%' }}
                    >
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                                <img
                                    src={member.logo}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

    );
}

export default Members;
