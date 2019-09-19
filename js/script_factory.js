
$(document).ready(function() {
	
	$("#slideshow #motherboard").click(function(event){
		alert("Motherboard will be explained below. Scroll down and check!");
		var title = "MOTHERBOARD";
		var content = ("A motherboard (sometimes alternatively known as the mainboard, main circuit board, system board, baseboard, planar board or logic board,[1] or colloquially, a mobo) is the main printed circuit board (PCB) found in general purpose computers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals. Unlike a backplane, a motherboard usually contains significant sub-systems such as the central processor, the chipset's input/output and memory controllers, interface connectors, and other components integrated for general purpose use and applications. Motherboard specifically refers to a PCB with expansion capability and as the name suggests, this board is often referred to as the mother of all components attached to it, which often include peripherals, interface cards, and daughtercards: sound cards, video cards, network cards, hard drives, or other forms of persistent storage; TV tuner cards, cards providing extra USB or FireWire slots and a variety of other custom components. Similarly, the term mainboard is applied to devices with a single board and no additional expansions or capability, such as controlling boards in laser printers, televisions, washing machines, mobile phones and other embedded systems with limited expansion abilities.");
		document.getElementById("title").innerHTML=title;
		document.getElementById("content").innerHTML=content;
	});
	
	$("#slideshow #cpu").click(function(event){
		alert("CPU will be explained below. Scroll down and check!");
		var title = "CENTRAL PROCESSING UNIT (CPU)";
		var content = ("A central processing unit (CPU), also called a central processor or main processor, is the electronic circuitry within a computer that carries out the instructions of a computer program by performing the basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions. The computer industry has used the term 'central processing unit' at least since the early 1960s.[1] Traditionally, the term 'CPU' refers to a processor, more specifically to its processing unit and control unit (CU), distinguishing these core elements of a computer from external components such as main memory and I/O circuitry.");
		document.getElementById("title").innerHTML=title;
		document.getElementById("content").innerHTML=content;
	});
	$("#slideshow #ram").click(function(event){
		alert("Ram will be explained below. Scroll down and check!");
		var title = "RAM";
		var content = ("A Random-Access Memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory. In contrast, with other direct-access data storage media such as hard disks, CD-RWs, DVD-RWs and the older magnetic tapes and drum memory, the time required to read and write data items varies significantly depending on their physical locations on the recording medium, due to mechanical limitations such as media rotation speeds and arm movement.");
		document.getElementById("title").innerHTML=title;
		document.getElementById("content").innerHTML=content;
	});
	
});