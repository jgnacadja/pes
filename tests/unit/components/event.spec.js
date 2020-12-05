import { shallowMount } from "@vue/test-utils";
import Event from "../../../src/components/calendar/Event.vue";

test("Event", () => {
  // render the component
  const wrapper = shallowMount(Event);

  // assert the error has gone away
  expect(wrapper.find(".error").exists()).toBe(false);
});
