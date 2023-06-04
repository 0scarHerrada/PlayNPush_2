import React, { useState, useEffect } from 'react';

function Playlist(props) {

    //const [playlistName, setPlaylistName] = useState('')

    const getPlaylistName = (event) => {
        if (props.alpha_playlist.length > 0) {
            if (event.key === 'Enter') {
                if (event.target.value.length > 0) {
                    props.stage(true)
                    props.save(false)
                    // 👇 Get input value
                    const betaName = event.target.value;

                    const trackDurations = props.alpha_playlist.map(track => track[6])

                    const playlistDuration = trackDurations.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    },0);

                    const roundedPlaylistDuration = Math.round(playlistDuration/60000)

                    const namedAlpha = props.alpha_playlist.map(track =>
                        [...track, betaName, roundedPlaylistDuration, 'false']
                    )
                    props.set_beta((prev) => [...prev, namedAlpha])
                }
            }
        }
    }

    return (
        <div id='playlist'>
            <section id='playlist-section'>
                <input id='name-a-playlist' onKeyUp={getPlaylistName} type="search" placeholder='Enter name...'
                       maxLength='25'/>
            </section>
            <label id='sort-label' htmlFor="sort-select">Sort by:</label>
            <div id='sort-buttons-div'>
                <button className='sort-buttons' onClick={() => {
                    const originalAZ = props.alpha_playlist.map(track => track[1]+track[5].toLowerCase())
                    const sortedAZ = props.alpha_playlist.map(track => track[1]+track[5].toLowerCase()).sort()
                    const newAZ = sortedAZ.map(track => originalAZ.indexOf(track))
                    const aZ = newAZ.map(index => props.alpha_playlist[index])

                    props.sort_alpha(aZ);
                }} >A-Z</button>
                <button className='sort-buttons' onClick={() => {
                    const originalZA = props.alpha_playlist.map(track => track[1]+track[5].toLowerCase())
                    const sortedZA = props.alpha_playlist.map(track => track[1]+track[5].toLowerCase()).sort()
                    const newZA = sortedZA.map(track => originalZA.indexOf(track))
                    const aZ = newZA.map(index => props.alpha_playlist[index])
                    const zA = aZ.reverse()

                    props.sort_alpha(zA);
                }} >Z-A</button>
                <button className='sort-buttons' onClick={() => {
                    const originalLH = props.alpha_playlist.map(track => track[3]+track[5])
                    const sortedLH = props.alpha_playlist.map(track => track[3]+track[5]).sort()
                    const newLH = sortedLH.map(track => originalLH.indexOf(track))
                    const highLow = newLH.map(index => props.alpha_playlist[index])
                    const lowHigh = highLow.reverse()

                    props.sort_alpha(lowHigh);
                }} >Higher popularity - Lower popularity</button>
                <button className='sort-buttons' onClick={() => {
                    const originalHL = props.alpha_playlist.map(track => track[3]+track[5])
                    const sortedHL = props.alpha_playlist.map(track => track[3]+track[5]).sort()
                    const newHL = sortedHL.map(track => originalHL.indexOf(track))
                    const highLow = newHL.map(index => props.alpha_playlist[index])

                    props.sort_alpha(highLow);
                }} >Lower popularity - Higher popularity</button>
                <button className='sort-buttons' onClick={() => {
                    const originalSL = props.alpha_playlist.map(track => track[6])
                    const sortedSL = props.alpha_playlist.map(track => track[6]).sort((a,b) => a-b);
                    const newSL = sortedSL.map(track => originalSL.indexOf(track))
                    const shortLong = newSL.map(index => props.alpha_playlist[index])

                    props.sort_alpha(shortLong);
                }} >Short songs - Long songs</button>
                <button className='sort-buttons' onClick={() => {
                    const originalLS = props.alpha_playlist.map(track => track[6])
                    const sortedLS = props.alpha_playlist.map(track => track[6]).sort((a,b) => a-b);
                    const newLS = sortedLS.map(track => originalLS.indexOf(track))
                    const shortLong = newLS.map(index => props.alpha_playlist[index])
                    const longShort = shortLong.reverse()

                    props.sort_alpha(longShort);
                }} >Long songs - Short songs</button>
                <button className='sort-buttons' onClick={() => {
                    const originalON = props.alpha_playlist.map(track => track[8]+track[5])
                    const sortedON = props.alpha_playlist.map(track => track[8]+track[5]).sort()
                    const newON = sortedON.map(track => originalON.indexOf(track))
                    const oldNew = newON.map(index => props.alpha_playlist[index])

                    props.sort_alpha(oldNew);
                }} >Old songs - New songs</button>
                <button className='sort-buttons' onClick={() => {
                    const originalNO = props.alpha_playlist.map(track => track[8]+track[5])
                    const sortedNO = props.alpha_playlist.map(track => track[8]+track[5]).sort()
                    const newNO = sortedNO.map(track => originalNO.indexOf(track))
                    const oldNew = newNO.map(index => props.alpha_playlist[index])
                    const newOld = oldNew.reverse()

                    props.sort_alpha(newOld);
                }} >New songs - Old songs</button>
            </div>
        </div>
    )
}

export default Playlist;


// <section id='sort-section'>
//                 <div>
//                     <label htmlFor="">Artist</label>
//                     <select name="sort-options" id="sort-select">
//                         <option value="">None</option>
//                         <option value="1">A - Z</option>
//                         <option value="2">Z - A</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="">Popularity</label>
//                     <select name="sort-options" id="sort-select">
//                         <option value="">None</option>
//                         <option value="3">Higher popularity - Lower popularity</option>
//                         <option value="4">Lower popularity - Higher popularity</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="">Runtime</label>
//                     <select name="sort-options" id="sort-select">
//                         <option value="">None</option>
//                         <option value="5">Short songs - Long songs</option>
//                         <option value="6">Long songs - Short songs</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="">Year</label>
//                     <select name="sort-options" id="sort-select">
//                         <option value="">None</option>
//                         <option value="alpha-song">Old songs - New songs</option>
//                         <option value="alpha-song-r">New songs - Old songs</option>
//                     </select>
//                 </div>
// </section>