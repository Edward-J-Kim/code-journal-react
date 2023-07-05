import { useState } from 'react';
import placehoderimage from '../images/placeholder-image-square.jpg';

const storageArray = [];

export default function Form({
  handleFormOnSubmit,
  setTitle,
  setUrl,
  setNotes,
  url,
}) {
  return (
    <main>
      <form id="entryForm" onSubmit={(e) => handleFormOnSubmit(e)}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              id="formImage"
              src={url ? url : placehoderimage}
              alt="image of entry image"
            />
          </div>
          <div className="column-half">
            <label className="margin-bottom-1 d-block" for="title">
              Title
            </label>
            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formTitle"
              name="formTitle"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="margin-bottom-1 d-block" for="photoUrk">
              Photo URL
            </label>
            <input
              required
              className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
              type="text"
              id="formURL"
              name="formURL"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <label className="margin-bottom-1 d-block" for="formNotes">
              Notes
            </label>
            <textarea
              required
              className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
              name="formNotes"
              id="formNotes"
              cols="30"
              rows="10"
              onChange={(e) => setNotes(e.target.value)}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            <button
              className="invisible delete-entry-button"
              type="button"
              id="deleteEntry">
              Delete Entry
            </button>
            <button className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
