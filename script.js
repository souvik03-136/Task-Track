let impbuttoncount = 0;
let pributtoncount = 0;
let secbuttoncount = 0;
let impbutton = document.getElementById('important');
let pributton = document.getElementById('primary');
let secbutton = document.getElementById('secondary');
let source = 'primary.png';
let ownername;
let owneremail;
let titletask;
let titlestring;
let descstring;
let sourcelinktask;
let desctask = ``;
let tagstask;
let sideid = 0;
let mainid = 0;

function closewindow() {
  let closewindow = confirm('Sure You Want to Close the Window?');
  if (closewindow == true) {
    window.close();
  }
}

function popupaddtask() {
  let absscreen = document.getElementById('popcontainer');
  let addtaskpopup = document.getElementById('addtaskpopup');
  absscreen.style.zIndex = '2';
  addtaskpopup.style.scale = '1';
  addtaskpopup.style.transform = ' translateY(0px)';
  addtaskpopup.style.transition = 'all 0.3s';
}

function popupdisplay() {
  let iddisplayid;
  let iddisplayidout = this.id;
  iddisplayid = iddisplayidout.charAt(0);
  let displaytitle = document.getElementById('displaytitle');
  let displaydesc = document.getElementById('descdisplay');
  let displaysourcename = document.getElementById('sourcename');
  let absscreen = document.getElementById('displaycontainer');
  let addtaskpopup = document.getElementById('displaypop');
  let displayemail = document.getElementById('sourceemail');

  absscreen.style.zIndex = '2';
  addtaskpopup.style.scale = '1';
  addtaskpopup.style.transform = ' translateY(0px)';
  addtaskpopup.style.transition = 'all 0.3s';
  displaytitle.innerText = document.getElementById(
    iddisplayid + 'fulltitle'
  ).innerText;
  console.log('this is pop ' + iddisplayid);
  displaydesc.innerText = document.getElementById(
    iddisplayid + 'fulldesc'
  ).textContent;
  displaysourcename.innerText = document.getElementById(
    iddisplayid + 'ownername'
  ).innerText;
  displayemail.innerText = document.getElementById(
    iddisplayid + 'owneremail'
  ).innerText;
}

function closepopup() {
  let absscreen = document.getElementById('popcontainer');
  let addtaskpopup = document.getElementById('addtaskpopup');
  addtaskpopup.style.scale = '0';
  addtaskpopup.style.transition = 'all 0.3s';
  addtaskpopup.style.transform = ' translateY(500px)';
  setTimeout(() => {
    absscreen.style.zIndex = '-1';
  }, 300);
}

function closepopupdisplay() {
  let absscreen = document.getElementById('displaycontainer');
  let addtaskpopup = document.getElementById('displaypop');
  addtaskpopup.style.scale = '0';
  addtaskpopup.style.transition = 'all 0.3s';
  addtaskpopup.style.transform = ' translateY(500px)';
  setTimeout(() => {
    absscreen.style.zIndex = '-1';
  }, 300);
}

function imptagcolor() {
  if (impbuttoncount % 2 == 0) {
    impbutton.style.backgroundColor = '#FF605C';
    impbutton.style.color = 'white';
    impbuttoncount++;
  } else if (impbuttoncount % 2 != 0) {
    impbutton.style.backgroundColor = 'transparent';
    impbutton.style.color = '#FF605C';
    impbuttoncount++;
  }
}

function pritagcolor() {
  if (pributtoncount % 2 == 0) {
    pributton.style.backgroundColor = '#FFBD44';
    pributton.style.color = 'white';
    pributtoncount++;
  } else if (pributtoncount % 2 != 0) {
    pributton.style.backgroundColor = 'transparent';
    pributton.style.color = '#FFBD44';
    pributtoncount++;
  }
}

function sectagcolor() {
  if (secbuttoncount % 2 == 0) {
    secbutton.style.backgroundColor = '#00CA4E';
    secbutton.style.color = 'white';
    secbuttoncount++;
  } else if (secbuttoncount % 2 != 0) {
    secbutton.style.backgroundColor = 'transparent';
    secbutton.style.color = '#00CA4E';
    secbuttoncount++;
  }
}

function togetvalues() {
  ownername = document.getElementById('ownername').value;
  owneremail = document.getElementById('owneremail').value;
  titletask = document.getElementById('titletask').value;
  sourcelinktask = document.getElementById('sourcelink').value;
  desctask = document.getElementById('descpop').value;
  tagstask = 'IMP';
}

function createelementside() {
  if (
    ownername == '' ||
    owneremail == '' ||
    titletask == '' ||
    desctask == '' ||
    tagstask == ''
  ) {
    return false;
  } else if (
    ownername != '' ||
    owneremail != '' ||
    titletask != '' ||
    desctask != '' ||
    tagstask != ''
  ) {
    let maincontainer = document.getElementById('insidescroll');
    let noteside = document.createElement('div');
    noteside.onclick = popupdisplay;
    noteside.className = 'note1';
    noteside.setAttribute('id', sideid + 's');
    let sidetagimagediv = document.createElement('div');
    sidetagimagediv.className = 'tagiconside';
    let sidecardimage = document.createElement('img');
    sidecardimage.src = source;
    sidecardimage.innerText = tagstask;
    sidecardimage.className = 'tagimageside';
    // sidecardimage.width = '20px';
    let titlesidecard = document.createElement('div');
    titlesidecard.className = 'titlesidecard';
    titlesidecard.innerText = titletask.substring(0, 20) + '..';
    titlesidecard.setAttribute('id', sideid + 'sidetitle');
    sidetagimagediv.appendChild(sidecardimage);
    noteside.appendChild(sidetagimagediv);
    noteside.appendChild(titlesidecard);

    maincontainer.appendChild(noteside);
    console.log(titlesidecard.id);
    sideid++;
  }
}

function createelementmain() {
  if (
    ownername == '' ||
    owneremail == '' ||
    titletask == '' ||
    desctask == '' ||
    tagstask == ''
  ) {
    alert('Please Enter Correct Details');
  } else if (
    ownername != '' ||
    owneremail != '' ||
    titletask != '' ||
    desctask != '' ||
    tagstask != ''
  ) {
    let maincontainer = document.getElementById('mainnotessection');
    let notecontainer = document.createElement('div');
    notecontainer.className = 'note1main';
    notecontainer.setAttribute('id', mainid);

    let firstsection = document.createElement('div');
    firstsection.className = 'firstsectionmain';
    let secondsection = document.createElement('div');
    secondsection.className = 'secondsection';
    let thirdsection = document.createElement('div');
    thirdsection.className = 'thirdsection';

    //firstsection dynamic generation
    let titlemaincard = document.createElement('div');
    titlemaincard.innerText = titletask.substring(0, 20) + '..';
    titlemaincard.className = 'titlemaincard';
    titlemaincard.setAttribute('id', mainid + 'title');
    titlestring = titletask;

    let fulltitle = document.createElement('div');
    fulltitle.innerText = titletask;
    fulltitle.style.display = 'none';
    fulltitle.setAttribute('id', mainid + 'fulltitle');

    let fulldesc = document.createElement('div');
    fulldesc.textContent = desctask;
    fulldesc.style.display = 'none';
    fulldesc.setAttribute('id', mainid + 'fulldesc');

    let tagmainsection = document.createElement('div');
    tagmainsection.className = 'tagmainsection';

    let tag = document.createElement('div');
    tag.className = 'important';
    tag.classList.add('tagsmark');
    tag.onclick = imptagcolor;
    tag.innerText = tagstask;

    tagmainsection.appendChild(tag);
    firstsection.appendChild(titlemaincard);
    firstsection.appendChild(tagmainsection);
    firstsection.appendChild(fulltitle);

    //secondsection dynamic generation

    secondsection.innerText = desctask.substring(0, 150) + '..';
    secondsection.className = 'secondsection';
    secondsection.setAttribute('id', mainid + 'desc');
    secondsection.appendChild(fulldesc);

    //thirdsection dynamic generation

    let sourcemaincard = document.createElement('div');
    sourcemaincard.className = 'sourcemaincard';

    let sourcehead = document.createElement('div');
    sourcehead.className = 'sourcehead';
    sourcehead.innerText = 'Source';

    let sourcename = document.createElement('div');
    sourcename.className = 'sourcename';
    sourcename.innerText = ownername;
    sourcename.setAttribute('id', mainid + 'ownername');

    let sourceemail = document.createElement('div');
    sourceemail.className = 'sourceemail';
    sourceemail.style.display = 'none';
    sourceemail.innerText = owneremail;
    sourceemail.setAttribute('id', mainid + 'owneremail');

    sourcemaincard.appendChild(sourcehead);
    sourcemaincard.appendChild(sourcename);
    sourcemaincard.appendChild(sourceemail);

    let buttonsectionmain = document.createElement('div');
    buttonsectionmain.className = 'buttonssectionmain';

    let linkimg = document.createElement('img');
    linkimg.src = 'link.png';
    linkimg.className = 'cardbuttonimages';

    let deleteimg = document.createElement('img');
    deleteimg.src = 'delete.png';
    deleteimg.className = 'cardbuttonimages';
    deleteimg.onclick = deleteelements;

    let editimg = document.createElement('img');
    editimg.setAttribute('id', mainid + 'expand');
    editimg.src = 'edit.png';
    editimg.className = 'cardbuttonimages';
    editimg.onclick = popupdisplay;

    let completedimg = document.createElement('img');
    completedimg.src = 'completed.png';
    completedimg.className = 'cardbuttonimages';
    completedimg.onclick = tomarkascomplete;
    completedimg.setAttribute('id', mainid + 'compbutton');

    buttonsectionmain.appendChild(linkimg);
    buttonsectionmain.appendChild(deleteimg);
    buttonsectionmain.appendChild(editimg);
    buttonsectionmain.appendChild(completedimg);

    thirdsection.appendChild(sourcemaincard);
    thirdsection.appendChild(buttonsectionmain);

    notecontainer.appendChild(firstsection);
    notecontainer.appendChild(secondsection);
    notecontainer.appendChild(thirdsection);
    maincontainer.appendChild(notecontainer);
    console.log(notecontainer.id);
    console.log(titlemaincard.id);
    console.log(secondsection.id);
    console.log(sourcename.id);
    mainid++;
  }
}

function clearvalues() {
  ownername = document.getElementById('ownername').value = '';
  owneremail = document.getElementById('owneremail').value = '';
  titletask = document.getElementById('titletask').value = '';
  sourcelinktask = document.getElementById('sourcelink').value = '';
  desctask = document.getElementById('descpop').value = '';
  tagstask = 'IMP';
}

function senddatatosheets() {
  popupdisplay();
}

function deleteelements() {
  let parent1id = this.parentNode;
  let parentt2id = parent1id.parentNode;
  let parentid = parentt2id.parentNode.id;
  console.log(parentid);
  let sideid = parentid + 's';

  let maincontainer = document.getElementById('mainnotessection');

  let removedel = document.getElementById(parentid);
  let sidedel = document.getElementById(sideid);
  if (removedel) {
    let useragreementtodeletenotes = confirm(
      'Do you Really Want to Delete the Note ?? '
    );
    if (useragreementtodeletenotes) {
      removedel.remove();
      sidedel.remove();
    } else {
      return false;
    }
  }
}

function tomarkascomplete() {
  let parent1id = this.parentNode;
  let parentt2id = parent1id.parentNode;
  let parentid = parentt2id.parentNode.id;
  console.log(parentid);
  // let compbutton = document.getElementById(parentid + 'compbutton');
  let comptitle = document.getElementById(parentid + 'title');
  // comptitle.classList.toggle('.completedtaskstyle');

  // Toggle the "myStyle" class on the element
  comptitle.classList.toggle('completedtaskstyle');
}

function clearall() {
  let maincontainer = document.getElementById('mainnotessection');
  let maincontainerside = document.getElementById('insidescroll');
  let useragreementtoclearallnotes = confirm(
    'You Sure To Clear All The Notes?'
  );
  if (useragreementtoclearallnotes) {
    maincontainer.innerHTML = '';
    maincontainerside.innerHTML = '';
  } else {
    return false;
  }
}

// A BASIC Node server
