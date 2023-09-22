import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Classes from './pages/Classes/Classes.tsx'
import Home from './pages/Home/Home.tsx'
import Races from './pages/Races/Races.tsx'
import Traits from './pages/Traits/Traits.tsx'
import Bestiary from './pages/Bestiary/Bestiary.tsx'


                                                      {/* TRAITS */}

import TraitsCardInfo1 from './pages/Traits/TraitsInfoCards/TIC1.tsx'
import TraitsCardInfo2 from './pages/Traits/TraitsInfoCards/TIC2.tsx'


                                                      {/* RACES */}

import Aarakokr_EV from './pages/Races/RacesInfoCards/Aarakokr/Aarakokr_EV.tsx'
import Aarakokr_MPMM from './pages/Races/RacesInfoCards/Aarakokr/Aarakokr_MPMM.tsx'
import Aarakokr_descr from './pages/Races/RacesInfoCards/Aarakokr/Aarakokr_descr.tsx'
import AarakokrImg from './pages/Races/RacesInfoCards/Aarakokr/AarakokrImg.tsx'

import Aasimar_VGM from './pages/Races/RacesInfoCards/Aasimar/Aasimar_VGM.tsx'
import Aasimar_MPMM from './pages/Races/RacesInfoCards/Aasimar/Aasimar_MPMM.tsx'
import Aasimar_descr from './pages/Races/RacesInfoCards/Aasimar/Aasimar_descr.tsx'
import AasimarImg from './pages/Races/RacesInfoCards/Aasimar/AasimarImg.tsx'

import AutoDwarf_AAG from './pages/Races/RacesInfoCards/AutoDwarf/AutoDwarf_AAG.tsx'
import AutoDwarf_descr from './pages/Races/RacesInfoCards/AutoDwarf/AutoDwarf_descr.tsx'
import AutoDwarfImg from './pages/Races/RacesInfoCards/AutoDwarf/AutoDwarfImg.tsx'



                                                      {/* BESTIARY */}

import DrakeCompanion from './pages/Bestiary/BestiaryInfoCards/DrakeCompanion/DrakeCompanion.tsx'
import DrakeCompanionImg from './pages/Bestiary/BestiaryInfoCards/DrakeCompanion/DrakeCompanionImg'

import SpiritOfTheElements from './pages/Bestiary/BestiaryInfoCards/SpiritOfTheElements/SpiritOfTheElements.tsx'
import SpiritOfTheElementsImg from './pages/Bestiary/BestiaryInfoCards/SpiritOfTheElements/SpiritOfTheElementsImg.tsx'



                                                      {/* CLASSES */}
// BARD
import BardAbilities from './pages/Classes/Bard/BardAbilities.tsx'
import BardDescriptions from './pages/Classes/Bard/BardDescriptions.tsx'
import BardSpells from './pages/Classes/Bard/BardSpells.tsx'
import BardImgs from './pages/Classes/Bard/BardImgs.tsx'

// WARLOCK
import WarlockAbilities from './pages/Classes/Warlock/WarlockAbilities.tsx'
import WarlockDescriptions from './pages/Classes/Warlock/WarlockDescriptions.tsx'
import WarlockSpells from './pages/Classes/Warlock/WarlockSpells.tsx'
import WarlockImgs from './pages/Classes/Warlock/WarlockImgs.tsx'


export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Classes' element={<Classes />} />
        <Route path='/Races' element={<Races />} />
        <Route path='/Traits' element={<Traits />} />
        <Route path='/Bestiary' element={<Bestiary />} />


                                                              {/* TRAITS */}

        <Route path='/TraitsCardInfo1' element={<TraitsCardInfo1 />} />
        <Route path='/TraitsCardInfo2' element={<TraitsCardInfo2 />} />


                                                              {/* RACES */}

        <Route path='/Aarakokr_EV' element={<Aarakokr_EV />} />
        <Route path='/Aarakokr_MPMM' element={<Aarakokr_MPMM />} />
        <Route path='/Aarakokr_descr' element={<Aarakokr_descr />} />
        <Route path='/AarakokrImg' element={<AarakokrImg />} />

        <Route path='/Aasimar_VGM' element={<Aasimar_VGM />} />
        <Route path='/Aasimar_MPMM' element={<Aasimar_MPMM />} />
        <Route path='/Aasimar_descr' element={<Aasimar_descr />} />
        <Route path='/AasimarImg' element={<AasimarImg />} />

        <Route path='/AutoDwarf_AAG' element={<AutoDwarf_AAG />} />
        <Route path='/AutoDwarf_descr' element={<AutoDwarf_descr />} />
        <Route path='/AutoDwarfImg' element={<AutoDwarfImg />} />


                                                              {/* BESTIARY */}

        <Route path='/DrakeCompanion' element={<DrakeCompanion />} />
        <Route path='/DrakeCompanionImg' element={<DrakeCompanionImg />} />

        <Route path='/SpiritOfTheElements' element={<SpiritOfTheElements />} />
        <Route path='/SpiritOfTheElementsImg' element={<SpiritOfTheElementsImg />} />

       
                                                              {/* CLASSES */}

        {/* BARD */}

        <Route path='/BardAbilities' element={<BardAbilities />} />
        <Route path='/BardDescriptions' element={<BardDescriptions />} />
        <Route path='/BardSpells' element={<BardSpells />} />
        <Route path='/BardImgs' element={<BardImgs />} />


        {/* Warlock */}

        <Route path='/WarlockAbilities' element={<WarlockAbilities />} />
        <Route path='/WarlockDescriptions' element={<WarlockDescriptions />} />
        <Route path='/WarlockSpells' element={<WarlockSpells />} />
        <Route path='/WarlockImgs' element={<WarlockImgs />} />

      </Routes>
    </>
  )
}
