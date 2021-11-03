# FNF-Library

Project
    GUI Wizard to walk through setup

    Load in React Act -->
        Should load dynamically
            * So users can simply give a directory that holds 
            several mods held in respective directories ModName.

        Can maybe have some different *views* that could be used.
            Basic view -> just a round square that holds the mod name and 
            character icon. Maybe color it based on some pull from assets?

            Character Wheel --> char idle animations with columns like this:

                    |  |           |  |
                    |  |           |  |
                    |  |           |  |
                    |  |           |  |
                    |  |           |  |
                    |  |           |  |
                    |  |           |  |
                     \ |           | /
                      \|___________|/

            Grid View  --> char icons
                        
        REACT APP 
            Displays Mods from library and allows user to interact
            with them

            STATE
                Mode:
                    Grid --> Gets icons, displays in box fitted to screen

            
        COMPONENTS
            Mods
                Includes libraries from projects directory. 
                    Should handle how their state is displayed based on what mode
                    the app sets it at.

                    Passed props from app that manages state.

            
            