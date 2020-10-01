const Eris = require('eris');

const bot = new Eris(process.env.DISCORD_BOT_TOKEN);

bot.on('ready', () => {
    console.log('Ready!');
});

//LINKS (UPDATE LINKS HERE)
let rendersLink = "https://bit.ly/2Sczncy";
let releaseSmash4US = "https://bit.ly/2jeWiCF";
let releaseSmash4EU = "https://bit.ly/2EO6gJL";
let releaseSmashUlt = "https://rb.gy/n4ortw";
let gamebananaLink = "https://gamebanana.com/gamefiles/12654";
let changelogSheet;
let moddingServerInvite = "https://discord.gg/ASJyTrZ";



bot.on('messageCreate', (msg) => {
    if (msg.content.includes('1337')) {
        bot.createMessage(msg.channel.id, 'damn it');


        //commands

    } 
    else if (msg.content === "=v who made you?") {
        bot.createMessage(msg.channel.id, 'yoji is my father');
    } 
    else if (msg.content === "=v where did you come from?") {
        bot.createMessage(msg.channel.id, 'I blinked into existence. A virtual on-switch was flipped, thus I can speak and hear.');

    } 
    else if (msg.content === "=v renders") {
        bot.createMessage(msg.channel.id, 'High quality, clean transparent renders of every alt costume: ' + rendersLink);

    }  
    else if (msg.content === "=v help") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "List of Commands",
                fields: [
                    {
                        name: "=v renders",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v changelog",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v newbie",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v textures",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v modding",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v msbt",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v tools",
                        value: "----------------------------------",
                        inline: true
                    },
                    {
                        name: "=v forge",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v haxchi",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v concepts",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v releases",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v releases smash 4",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v gamebanana",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v dds",
                        value: "----------------------------------",
                        inline: true
                    },
                    {
                        name: "=v sound",
                        value: "----------------------------------",
                        inline: true
                    },
                    {
                        name: "=v why were you made",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v delete system32",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "=v sudo rm -rf",
                        value: "---------------------------------",
                        inline: true
                    },
                    {
                        name: "1337",
                        value: "---------------------------------",
                        inline: true
                    },
                ],
            }
        });

    } 
    else if (msg.content === "=v changelog") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Official Changelog:",
                        value: "https://docs.google.com/spreadsheets/d/11sTAKTEXWu5Pb-Sd230NgaqZJJCcbdbPylveAZhr-HI/edit?usp=drivesdk",
                        inline: true
                    }
                ],
            }
        });

    } 
    else if (msg.content === "=v newbie") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Guides to get started",
                fields: [
                    {
                        name: "Nintendo Switch Modding Guide:",
                        value: "https://nh-server.github.io/switch-guide/",
                        inline: true
                    },
                    {
                        name: "Guide to Getting Started Modding Ultimate:",
                        value: "https://gamebanana.com/tuts/12827",
                        inline: true
                    },
                    {
                        name: "Texture Editing Guide",
                        value: "https://gamebanana.com/tuts/13429",
                        inline: true
                    },
                    {
                        name: "Custom Render Editing Guide:",
                        value: "https://gamebanana.com/tuts/13434",
                        inline: true
                    },
                ],
            }
        });

    } 
    else if (msg.content === "=v textures") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Guide on Custom Textures:",
                        value: "https://gamebanana.com/tuts/12381",
                        inline: true
                    }
                ],
            }
        });

    } 
    else if (msg.content === "=v sumh" || msg.content === "=v modding server" || msg.content === "=v modding" ) {
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [
                    {
                        name: "Invite to Smash Ultimate Modding Hub Server:",
                        value: moddingServerInvite,
                        inline: true
                    }
                ],
            }
        });

    } 
    else if (msg.content === "=v msbt") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Tool for editing in-game text:",
                        value: "https://github.com/IcySon55/3DLandMSBTeditor/releases/tag/v0.9.8",
                        inline: true
                    }
                ],
            }
        });

    } else if (msg.content === "=v tools") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Texture tools for Photoshop, including mip maps, etc.:",
                        value: "https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop",
                        inline: true
                    }
                ],
            }
        });

    } else if (msg.content === "=v forge") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Most Recent Forge Release:",
                        value: "https://github.com/jam1garner/Smash-Forge/releases",
                        inline: true
                    }
                ],
            }
        });

    } else if (msg.content === "=v haxchi") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "",
                fields: [
                    {
                        name: "Guide on Haxchi:",
                        value: "https://www.youtube.com/watch?v=qyqv0F0AvVw",
                        inline: true
                    }
                ],
            }
        });

    } else if (msg.content === "=v dds") {
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [
                    {
                        name: "DDS Plugin for GIMP:",
                        value: "http://registry.gimp.org/node/70",
                        inline: true
                    }
                ],
            }
        });
    } 
    else if (msg.content === "=v release smash 4") {
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [
                    {
                        name: "SM4SHWAVE US Releases:",
                        value: releaseSmash4US,
                        inline: true
                    },
                    {
                        name: "SM4SHWAVE EU Packed:",
                        value: releaseSmash4EU,
                        inline: true
                    }
                ],

            }
        });
    }
    else if (msg.content === "=v release") {
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [
                    {
                        name: "SMVSHWAVE Horizon Release:",
                        value: releaseSmashUlt,
                        inline: true
                    }
                ],

            }
        });
    }
    else if (msg.content === "=v gamebanana") {
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [
                    {
                        name: "Official SMVSHWAVE Gamebanana page:",
                        value: gamebananaLink,
                        inline: true
                    }
                ],

            }
        });
    } 
    else if (msg.content === "=v concepts") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Concept Sumbissions Folder Housing All Ideas for Skins / Stages / UI etc.",
                fields: [
                    {
                        name: "Drive Folder - Set to VIEW ONLY",
                        value: "https://drive.google.com/folderview?id=1m_9ay6Nm4RBiMXDTvRPQqgt8Wq4T9r-r",
                        inline: true
                    }
                ],
            }
        });

    } else if (msg.content === "=v sound") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Database housing all nus3bank files. Includes Victory Themes / Menu Music / Stage Music etc.",
                fields: [
                    {
                        name: "Drive Folder - Set to VIEW ONLY",
                        value: "https://drive.google.com/open?id=1LX2AGiYkydhwCzm1cf9nuCsWdXXHpIx4",
                        inline: true
                    }
                ],
            }
        });


        //error messages and other fun stuff

    } else if (msg.content === "=v why were you made") {
        bot.createMessage(msg.channel.id, 'To help with sm4shwave stuff, and it was good practice for yoji');

    } else if (msg.content === "Damn it, Vektroid") {
        bot.createMessage(msg.channel.id, 'Scream, and the void echoes your clamour.');

    } else if (msg.content === "=v delete system32") {
        bot.createMessage(msg.channel.id, 'Deleting folder: "system32"... ... ... ... ERROR. PERMISSION DENIED.');

    } else if (msg.content === "=v sudo rm -rf") {
        bot.createMessage(msg.channel.id, 'Warning: improper use of the sudo command can cause irreversible damage. The void calls you. Do you answer?');

    } else if (msg.content === "uhhhhh") {
        bot.createMessage(msg.channel.id, ':eyes:');

    } else if (msg.content === "babe no") {
        bot.createMessage(msg.channel.id, 'Its time we tell them');
    } else if (msg.content === "oh god here we go...") {
        bot.createMessage(msg.channel.id, 'kids your father and I are getting a divorce');

    } else if (msg.content === "new pack link") {
        bot.createMessage(msg.channel.id, 'https://bit.ly/30mo3zi');

        //   } else if (msg.content.includes('=v') + emptyString) {
        //     bot.createMessage(msg.channel.id, 'Command not recognized. Try Again?');


    }  //Ending brackets   
});



bot.connect();                                         