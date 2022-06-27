#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// use tauri::{Manager, PhysicalSize, Size};
use tauri_plugin_store::PluginBuilder;

fn main() {
  tauri::Builder::default()
  .plugin(PluginBuilder::default().build())
  .plugin(tauri_plugin_window_state::Builder::default().build())
  .invoke_handler(tauri::generate_handler![called_from_js])
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
}

#[tauri::command]
fn called_from_js() -> String {
  // The print macro is problematic in release environment (crashes the application if not ran from a terminal)
    // println!("Returning from tauri");
    "Hi from Tauri".to_string()
}
