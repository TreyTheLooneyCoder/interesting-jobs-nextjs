import React from 'react'
import JobCard from '@/app/components/JobCard'


type Props = {}

const MainPage = (props: Props) => {

    const cards = [
        { 
            title: 'BioWare Game Developer', 
            why: 'Mass Effect is the game that introduced me to the concept of choice based games with different endings when I was younger and thats been my favorite genre of game ever since, plus game developing has been my dream job since I started gaming at a younger age.', 
            skills: "To qualify for this Job I'd need to learn to use the Frostbite engine and posibly Learn C++ but they also make use of C# for scripting as well.", 
            goals: "My goal would be to maybe get a chance to contribute in some way to the next Mass Effect game thats coming out, I love the Franchise and it's confirmed getting to see first hand the behind the scenes process of working on a game of that level would be a dream come true.", 
            row: 1, col: 1 
        },

        { 
            title: 'Ubisoft Programmer', 
            why: "I have yet to play a ubisoft game that I didn't enjoy, I'v played some of the assasins creed games, some of the Far Cry Series, and Rainbow 6 Siege has been one of my go to games for a while now. My ultimate goal in life other than starting and raising a family is to find a job that doesnt feel like work and ever since I was a kid working for a gaming company seems like it.", 
            skills: "To work at Ubisoft I'd need a solid understanding of the c++ language, as well as cultivate a more profound knowledge of data structure and algorithms. I have the basic mathematic, physics, and gameplay mechanic knowledge, but It would help to practice and improve my debuging skills. I Would need to devote some time to mastering chinese speech and writing as well.", 
            goals: 'My goal with Ubisoft would be to work so hard that they let me create a siege operator.', 
            row: 1, col: 2 
        },

        { 
            title: 'Arkane Studios Gameplay Programmer', 
            why: "I chose this company because I've recently gotten really into the Dishonored franchise and I did some research and found out they are responsible for the Marvel Blade game comming out sometime soon, as well as the relatively popular horror game prey. They also made Redfall and Deathloop, games me and my older brother played.", 
            skills: "A patern I'm begining to realise is that a lot of the gaming focused copanies I've looked up all require a decent level of mastery for C/C++, but I'd also need the ability to architect and design, and fearlessly jump into large existing code bases. As well as Strong Organization and comunication skills in both english & French and contribute innovative and original/creative ideas toward all aspects of game production and developement.", 
            goals: 'My goal would be to hopefully become a valuable asset to the company and try to ensure a stable job until my retirement.', 
            row: 2, col: 1 
        },

        { 
            title: 'ZeniMax/ Bethesda Engine Programmer', 
            why: "Bethesda is huge working there would mean I made it as a Game developer, but it would still pose challenges being such a huge company.", 
            skills: "To work in such a huge environment I'd have to work on my social skills more and have a high level of understanding of C/C++ and low level hardware(CPU, cache, SIMD, etc.) Much like an Arkane Studios Gameplay Programmer, Ill also need to have the ability to architect, design, and fearlessly jump into large existing code bases. Have Strong Organization and comunication skills in both english & French as well, and contribute innovative and original/creative ideas toward all aspects of game production and developement.  ", 
            goals: "My goal would be to secure a position on the team for the new doom games coming out, I have a feeling they're going to preform well.", 
            row: 2, col: 2
        },

        { 
            title: 'DotNot Games Level And Game Designer', 
            why: "DotNot Games created the Life is Strange games. I really enjoyed watching some of my favorite youtubers play it when I was younger and later played through myself even when I got a system of my own. Really good story telling, which is one of the things that attracted me to games in the first place. All the games I've played by this company have had that same depth of plot, and I can really appreciate the way they incorporate this aspect of creativity.", 
            skills: "To work here I would need to have at least 5 years experience in a similar role, with very good knowledge of the mechanics of the 3Cs,(Character, Camera, Controls) be proficient in one of the 3D game engines, ideally Unreal Engine 4, and I have already worked on a flowchart creation tool.(Draw.io) I have also already learned some knowledge of a scripting language,(C#) and I have a very strong affinity for games with a strong narrative component. Strengthening my Vocabulary couldn't hurt either, and I will have to be organized and autonomous, I'll have to be my the driving force for daily initiatives within the design team, adaptability, com,unication, and creativity will be a huge asset in this position.", 
            goals: "My goal would be to hopefully someday turn the book I'm writing into a game and maybe more.", 
            row: 3, col: 1 
        },
    ];


  return (
    <div className='h-max bg-slate-800'>
        <main className=''>
            <h1 className='text-white text-4xl flex justify-self-center pt-2'>Jobs That Interest Me</h1>
            <div className='grid grid-cols-2 grid-rows-3 '>
                {cards.map((card) => (    
                    <JobCard title={card.title} why={card.why} skills={card.skills} goals={card.goals} row={card.row} col={card.col} />
                ))}
            </div>
        </main>
    </div>
  )
}

export default MainPage