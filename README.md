# FNF-Library

Project
    GUI Wizard to walk through setup

    Load in React Act -->
        Should load dynamically
            * So users can simply give a directory that holds 
            several mods held in respective directories ModName.

        Can maybe have some different *views* that could be used.
            Basic view -> looks like song select within FNF
                        
        REACT APP 
            Displays Mods from library and allows user to interact
            with them

            Move up and down thru menu using arrow keys like game

            
        COMPONENTS
            Mods
                Includes libraries from projects directory. 
                    Should handle how their state is displayed based on what mode
                    the app sets it at.

                    Passed props from app that manages state.

            Font
                Uses Sprite component to interact with alphabet.png and extract
                characters from font page.

                    - Should separate text creating component into new
                        js file.

            Icon
                Uses Sprite component to interact with icons with projects and 
                extract from page.

            Sprite
                Uses Canvas Component and loads image once canvas is set up.

            Canvas
                Creates an HTML canvas element using React States.

            
            