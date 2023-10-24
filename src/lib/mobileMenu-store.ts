import { writable } from "svelte/store";

export function createMobileMenuStore(initialValue: string) {
  const mobileMenu = writable(initialValue);
  function showMobileMenu() {
    mobileMenu.update(() => "");
  }

  function hideMobileMenu() {
    mobileMenu.update(() => "hidden");
  }

  return {
    ...mobileMenu,
    showMobileMenu,
    hideMobileMenu
  }
}