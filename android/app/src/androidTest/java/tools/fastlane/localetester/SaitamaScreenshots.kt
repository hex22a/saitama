package tools.fastlane.localetester

import androidx.test.rule.ActivityTestRule

import com.saitama.MainActivity

import org.junit.Before
import org.junit.ClassRule
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.JUnit4

import tools.fastlane.screengrab.Screengrab
import tools.fastlane.screengrab.UiAutomatorScreenshotStrategy
import tools.fastlane.screengrab.locale.LocaleTestRule

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.matcher.ViewMatchers.withContentDescription
import com.saitama.RNTestIds

@RunWith(JUnit4::class)
class SaitamaScreenshots {

    @Rule
    @JvmField
    var activityRule = ActivityTestRule(MainActivity::class.java)

    @Before
    fun before() {
        Screengrab.setDefaultScreenshotStrategy(UiAutomatorScreenshotStrategy())
    }

    @Test
    fun testTakeScreenshot() {
        EspressoViewFinder.waitForDisplayed(withContentDescription(RNTestIds.CONTAINER))

        Screengrab.screenshot("before_button_click")

        EspressoViewFinder.waitForDisplayed(withContentDescription(RNTestIds.START_SETUP)) {
            startSetup -> onView(startSetup).perform(click())
        }

        Screengrab.screenshot("after_button_click")
    }

    companion object {
        @ClassRule
        @JvmField
        val localeTestRule = LocaleTestRule()
    }
}
