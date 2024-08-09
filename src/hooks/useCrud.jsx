import axios from "axios";
import { useMemo, useState } from "react";
import API from "../api/api";

export default function useCrud({ initialState = {}, endpoint }) {
  const [state, setState] = useState(initialState);
  const [updatedState, setUpdatedState] = useState({});

  const dirty = useMemo(() => {
    return Array.isArray(updatedState)
      ? updatedState?.length == 0
      : Object.keys(updatedState)?.length !== 0;
  }, [updatedState]);

  async function create() {
    const { ok, data } = await API.post(endpoint, {}, state);
  }

  async function update() {
    const { ok, data } = await API.put(`${endpoint}/${state.id}`, {}, state);
  }

  async function remove() {
    const { ok, data } = await API.delete(`${endpoint}/${state.id}`, {}, state);
  }

  async function readSingle() {
    const { ok, data } = await API.get(`${endpoint}/${state.id}`, {}, state);
  }

  async function readMany() {
    const { ok, data } = await API.get(endpoint, {}, state);
  }

  function handleChange(path, type = "input") {
    return (e) => {
      const fields = path.split(".");

      setState((curr) => {
        let newValue = { ...curr };
        let parentNode = newValue;

        fields.forEach((field, index) => {
          if (!isNaN(field)) {
            field = parseInt(field, 10);
          }

          if (index === fields.length - 1) {
            if (type === "input") {
              parentNode[field] = e.value;
            } else if (type === "number") {
              parentNode[field] = e.target.value;
            }
          } else {
            if (typeof parentNode[field] === "object") {
              parentNode[field] = Array.isArray(parentNode[field])
                ? [...parentNode[field]]
                : { ...parentNode[field] };
            } else {
              parentNode[field] = isNaN(fields[index + 1]) ? {} : [];
            }
            parentNode = parentNode[field];
          }
        });

        return newValue;
      });
    };
  }

  return {
    create,
    readSingle,
    readMany,
    update,
    remove,
    handleChange,
    state,
    dirty,
  };
}
