import React from "react";
import {
    HandHeart,
    Megaphone,
    ScrollText,
    GraduationCap
} from "lucide-react";

const impactStats = [
    {
        title: "Community Outreach & Welfare",
        description:
            "Organized impactful initiatives like blood donation camps, cloth drives, and festive support drives for underprivileged communities.",
        icon: HandHeart,
    },
    {
        title: "Social Awareness & Advocacy",
        description:
            "Led awareness movements like the candle march and street plays on corruption to engage students in civic responsibility.",
        icon: Megaphone,
    },
    {
        title: "Cultural Preservation & Unity",
        description:
            "Celebrated festivals like Gudi Padwa to promote indigenous culture and foster inclusivity on campus.",
        icon: ScrollText,
    },
    {
        title: "Mentorship & Alumni Engagement",
        description:
            "Hosted alumni talks to bridge students with experienced graduates and foster inspiration through shared journeys.",
        icon: GraduationCap,
    },
];

const ArunodayImpact = () => {
    return (
        <div className="bg-card-gradient rounded-2xl p-8 border border-border my-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
                Impact of Arunoday
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {impactStats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="text-center animate-slide-in-right"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon className="w-8 h-8 text-gold" />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ArunodayImpact;
