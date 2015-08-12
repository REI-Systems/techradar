//This is the title for your window tab, and your Radar
document.title = "REI Technology Radar (August 2015)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            { name: 'Single Page Applications', pc: { r: 280, t: 133 }, movement: 'c' },

            {name:"Microservices", pc:{r:130,t:130},movement:"c"},
            {name:"Products over Projects Mindset", pc:{r:130,t:165},movement:"c"},
            {name:"API First", pc:{r:120,t:95},movement:"c"},

            {name:"Automated Testing", pc:{r:50,t:130},movement:"c"},
            {name:"Application Health Monitoring", pc:{r:80,t:150},movement:"c"},
            {name:"Agile Software Development", pc:{r:80,t:130},movement:"c"},
            {name:"Responsive Design", pc:{r:80,t:170},movement:"c"},
            {name:"Continuous Delivery", pc:{r:80,t:110},movement:"c"},
            {name:"DevOps", pc:{r:80,t:150},movement:"c"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
          { name: 'New Relic', pc: { r: 30, t: 25 },movement: 'c',domain: 'back-end' },
          { name: 'Composer', pc: { r: 40, t: 25 }, movement: 'c' },
          { name: 'Sonar', pc: { r: 40, t: 35 },movement: 'c' },

          { name: 'Chef',    pc: { r: 150, t: 30 },    movement: 'c' },
          { name: 'Elastic Search',    pc: { r: 120, t: 30 },    movement: 'c' },
          { name: 'Logstash', pc: { r: 120, t: 40 }, movement: 'c' },
          { name: 'Kibana',    pc: { r: 130, t: 50 },    movement: 'c' },
          { name: 'Ansible',    pc: { r: 220, t: 50 },    movement: 'c' },

          { name: 'Git Lab',    pc: { r: 220, t: 60 },    movement: 'c' },
          { name: 'Swagger',    pc: { r: 220, t: 70 },    movement: 'c' },

          { name: 'Hibernate',    pc: { r: 330, t: 60 },    movement: 'c' },
          { name: 'Subversion',    pc: { r: 330, t: 70 },    movement: 'c' }
        ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          { name: 'AWS', pc: { r: 30, t: 210 },movement: 'c',domain: 'back-end' },

          { name: 'MEAN Stack', pc: { r: 130, t: 210 }, movement: 'c' },
          { name: 'Azure', pc: { r: 170, t: 200 },movement: 'c' },
          { name: 'Apache Spark',    pc: { r: 150, t: 210 },    movement: 'c' },
          { name: 'Docker containers',    pc: { r: 120, t: 210 },    movement: 'c' },
          { name: 'Hadoop', pc: { r: 120, t: 220 }, movement: 'c' },
          { name: 'Trello',    pc: { r: 130, t: 230 },    movement: 'c' },

          { name: 'AWS Container Service',    pc: { r: 220, t: 230 },    movement: 'c' },
          { name: 'Rkt',    pc: { r: 220, t: 240 },    movement: 'c' },
          { name: 'CoreOS',    pc: { r: 220, t: 250 },    movement: 'c' }
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            { name: 'Bootstrap', pc: { r: 60, t: 290 },  movement: 'c' },

            { name: 'NodeJS', pc: { r: 60, t: 310 },  movement: 'c' },
            { name: 'AngularJS', pc: { r: 60, t: 278 },  movement: 'c' },

            { name: 'Django REST', pc: { r: 150, t: 300 }, movement: 'c',  domain: 'template' },
            { name: 'Jekyll', pc: { r: 150, t: 310 }, movement: 'c',  domain: 'template' },
            { name: 'Hugo', pc: { r: 150, t: 320 }, movement: 'c',  domain: 'template' },

            { name: 'Dashing', pc: { r: 210, t: 330 }, movement: 'c',  domain: 'template' },
            { name: 'React', pc: { r: 210, t: 340 }, movement: 'c',  domain: 'template' }


        ]
    }
];
