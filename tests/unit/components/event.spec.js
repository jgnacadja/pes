import { shallowMount } from "@vue/test-utils";
import Event from "../../../src/components/calendar/Event.vue";

test("Event", () => {
  // render the component
  const wrapper = shallowMount(Event);

  // update the name to be long enough
  wrapper.setData({ hover: "true" });

  // assert the error has gone away
  expect(wrapper.find(".error").exists()).toBe(false);
});
