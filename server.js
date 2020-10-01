const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);

 
bot.on('ready', () => { 
    console.log('Ready!');
});
 
bot.on('messageCreate', (msg) => {                                                  
    if(msg.content.includes('1337')) {
        bot.createMessage(msg.channel.id, 'damn it');
      
      
      //commands
      
    } else if (msg.content === "=v who made you?") {
        bot.createMessage(msg.channel.id, 'yoji is my father');
      
    } else if (msg.content === "=v where did you come from?") {
        bot.createMessage(msg.channel.id, 'I blinked into existence. A virtual on-switch was flipped, thus I can speak and hear.');
      
    } else if (msg.content === "=v renders") {
        bot.createMessage(msg.channel.id, 'High quality, clean transparent renders of every alt costume: https://m.imgur.com/r/smashbros/Nm8RL');
      
    } else if (msg.content === "=v help") {
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
          name: "=v s4m",
      value: "---------------------------------",
          inline: true
      },
    {
          name: "=v 552",
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
      
    } else if(msg.content === "=v changelog") {
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
      
     } else if(msg.content === "=v newbie") {
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "", 
                fields: [
                    {
                        name: "How to Dump your Game:",
                        value: "https://gamebanana.com/tuts/12528",
                        inline: true
                    },
                    {
                        name: "How to Setup the Explorer:",
                        value: "https://gamebanana.com/tools/6294",
                        inline: true
                    },
                    {
                        name: "How to Load Mods:",
                        value: "http://bit.ly/2ruUe0a",
                        inline: true
                    },
                ],
            }
     });

     } else if(msg.content === "=v textures") { 
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

     } else if(msg.content === "=v s4m") { 
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "", 
                fields: [ 
                    {
                        name: "Invite to Smash 4 Modding Server:", 
                        value: "https://discord.gg/EUZJhUJ", 
                        inline: true 
                    }
                ],
            }
     });
       
     } else if(msg.content === "=v 552") { 
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "", 
                fields: [ 
                    {
                        name: "A tutorial to help you use the 5.5.2 exploit:", 
                        value: "http://bit.ly/2ruUe0a", 
                        inline: true 
                    }
                ],
            }
     });
       
     } else if(msg.content === "=v msbt") { 
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
       
    } else if(msg.content === "=v tools") { 
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
      
    } else if(msg.content === "=v forge") { 
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
      
    } else if(msg.content === "=v haxchi") { 
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
          
    } else if(msg.content === "=v dds") { 
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
    } else if(msg.content === "=v releases") { 
        bot.createMessage(msg.channel.id, {
            embed: {
                fields: [ 
                    {
                        name: "US Releases:", 
                        value: "https://bit.ly/2jeWiCF", 
                        inline: true 
                    },
                    {
                        name: "EU Packed:",
                        value: "https://bit.ly/2HIQj82",
                        inline: true
                    },
                    {
                        name: "EU Unpacked:",
                        value: "https://bit.ly/2rgNQXU",
                        inline: true
                    }
                ],
                
            }
        }); 
      
        } else if(msg.content === "=v concepts") { 
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
          
        } else if(msg.content === "=v sound") { 
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