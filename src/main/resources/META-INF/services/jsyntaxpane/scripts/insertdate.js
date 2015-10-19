// Add support for Java 8
if (typeof(load) === typeof(Function)) {
    load("nashorn:mozilla_compat.js");
}

// Import the needed java packages and classes
importPackage(java.util);
importClass(javax.swing.JOptionPane)

function putDate() {
  TARGET.replaceSelection("This is a dummy proc that inserts the Current Date:\n" + new Date());
  TARGET.replaceSelection("\nTab Size of doc = " + AU.getTabSize(TARGET));
}
